import React from 'react';
import { MdDelete } from "react-icons/md";

const ListItem = ({ list, handleChange, handleDelete }) => {
	return (
		<ul>
			{
				list.map((item) => (
					<li key={item.id} className='list-style'>
						<input type='checkbox' onChange={() => handleChange(item.id)} checked={item.checked} />
						<label className='ml-1' onDoubleClick={() => handleChange(item.id)} style={(item.checked) ? { textDecoration: 'line-through' } : null}>{item.list}</label>
						<MdDelete role='button' tabIndex={0} className='ml-1' onClick={() => handleDelete(item.id)} />
					</li>
				))
			}
		</ul>
	)
}

export default ListItem