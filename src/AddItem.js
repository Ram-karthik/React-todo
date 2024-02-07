import React, { useRef } from 'react';
import { FaPlus } from "react-icons/fa";

const AddItem = ({ handleSubmit, newItem, setNewItem }) => {

    const inputRef = useRef();
    return (
        <form onSubmit={handleSubmit}>
            <div className='d-flex g-10'>
                <label htmlFor='add-item' className='labl-item'>Add Item</label>
                <input ref={inputRef} type='text' autoFocus id='add-item' placeholder='Add an item' className='ml-1' required value={newItem} onChange={(e) => setNewItem(e.target.value)} />
                <button type='Submit' style={{ backgroundColor: '#14A44D' }} className='btn plus-btn p-10'
                    onClick={() => inputRef.current.focus()}
                >
                    <FaPlus className='h-100' />
                </button>
            </div>
        </form>
    )
}

export default AddItem

