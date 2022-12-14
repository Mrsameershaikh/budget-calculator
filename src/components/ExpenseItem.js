import React from 'react'
import { MdEdit, MdDelete } from 'react-icons/md';
import { BiRupee } from "react-icons/bi";

const ExpenseItem = ({expense, handleEdit, handleDelete}) => {

const {id,charge, amount} = expense;
  return (
    <li className='item'>
      <div className='info'>
        <span className='expense'>{charge}</span>
        <span className='amount'><BiRupee size={17}/>{amount}</span>
      </div>
      <div>
        <button 
        className='edit-btn' 
        aria-label='edit button' 
        onClick={()=>handleEdit(id)}><MdEdit/>
        </button>

        <button 
        className='clear-btn' 
        aria-label='delete button'
        onClick={ () => handleDelete(id)}
        >
          <MdDelete/>
        </button>
      </div>
    </li>
  )
}

export default ExpenseItem
