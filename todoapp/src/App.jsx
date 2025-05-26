import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'
import { getList, remoceTodo } from './common/todoApi'
import Navbar from '../../route/src/components/Navbar'


function App() {

  return (
    <>
      <Navbar />
    </>
  )
}

export default App
