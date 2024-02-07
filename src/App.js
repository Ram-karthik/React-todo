import './App.css';
import Footer from './Footer';
import Header from './Header';
import { useEffect, useState } from 'react';
import ToDoList from './ToDoList';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import StateVsRef from './StateVsRef';
import UseEffect from './UseEffect';
import apiRequest from './apiRequest';
// import RandomMessage from './RandomMessage';


function App() {

  const API_URL = 'http://localhost:8000/items';

  const [list, setList] = useState([])

  const [newItem, setNewItem] = useState('');

  const [search, setSearch] = useState('');

  const [fetchErr, setFetchErr] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  // const [filterList, setfilterList] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Data Not Found')
        const listItems = await response.json();
        console.log(listItems);
        setList(listItems);
        setFetchErr(null)
      }
      catch (err) {
        console.log(err.message);
      }
      finally {
        setIsLoading(false)
      }
    }
    setTimeout(() => (async () => await fetchItems())(), 2000);
  }, [])

  const addItem = async (item) => {
    const id = list.length ? list[list.length - 1].id + 1 : 1;
    console.log(id);
    const addNewItem = { id, checked: false, list: item }
    console.log(addNewItem);
    const listItems = [...list, addNewItem];
    setList(listItems);

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(addNewItem)
    }

    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchErr(result)
  }

  const handleChange = async (id) => {
    const listItems = list.map((items) => items.id === id ? { ...items, checked: !items.checked } : items);
    setList(listItems);

    const myItem = listItems.filter(item => item.id === id)
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ checked: myItem[0].checked })
    }
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl, updateOptions)
    if (result) setFetchErr(result)
  }

  const handleDelete = async (id) => {
    const listItems = list.filter((items) => items.id === id ? '' : items);
    setList(listItems);

    const deleteOptions = {
      method: 'DELETE',
    }
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl, deleteOptions)
    if (result) setFetchErr(result)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newItem);
    addItem(newItem);
    setNewItem('');
  }

  return (
    <div>
      <Header />
      {/* <RandomMessage /> */}
      <AddItem
        handleSubmit={handleSubmit}
        newItem={newItem}
        setNewItem={setNewItem}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <main>
        {isLoading && <p>Loading...</p>}
        {fetchErr && <p>{`Error: ${fetchErr}`}</p>}
        {!isLoading && !fetchErr && <ToDoList
          list={list.filter(item => ((
            (item.list).toUpperCase()).includes(search.toUpperCase())
          ))}
          handleChange={handleChange} handleDelete={handleDelete} />
        }
      </main>
      {/* <StateVsRef /> */}
      {/* <h2>-----UseEffect Example-----</h2> */}
      {/* <UseEffect /> */}
      <Footer length={list.length} />
    </div>
  );
}

export default App;

//5.22.36