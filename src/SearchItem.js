import React from 'react'

const SearchItem = ({ search, setSearch }) => {
    return (
        <form>
            <div className='d-flex g-10'>
                <label htmlFor='search' className='labl-item'>Search</label>
                <input type='text' id='search' placeholder='search an item' className='ml-1 mt-1' value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
        </form >
    )
}

export default SearchItem