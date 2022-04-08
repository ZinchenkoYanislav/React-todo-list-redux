import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, updateTodo } from '../store/actions/todo'

export default function List() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  return (
    <div>
      {todos.map((item) => {
        return <div key={item.id} className={item.completed ? 'item-list done' : 'item-list'} onClick={() => dispatch(updateTodo(item.id))}>
          {item.title}
          <button className='deleteBTN' onClick={() => dispatch(deleteTodo(item.id))}>delete</button>
        </div>
      } )}
    </div>
  )
}
