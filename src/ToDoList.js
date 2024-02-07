import React from 'react'
import ListItem from './ListItem';

const ToDoList = ({ list, handleChange, handleDelete }) => {
  return (
    <>
      {(list.length) ? (
        <ListItem
          list={list} handleChange={handleChange} handleDelete={handleDelete} />
      ) :
        (
          <p>Your List is Empty...</p>
        )

      }

    </>
  )
}

export default ToDoList