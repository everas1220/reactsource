import { useCallback, useState } from 'react'
import './App.css'
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'


function App() {

  const todoList = [
    {
      id: 1, title: 'react 기초 알아보기', completed: true,
    },
    {
      id: 2, title: '컴포넌트 스타일링 하기', completed: false,
    },
    {
      id: 3, title: '일정 관리 앱 작성', completed: true,
    },
    {
      id: 4, title: '서버프로그램 연동', completed: false,
    },
  ];

  const [todos, setTodos] = useState(todoList);

  const onRemove = useCallback {((id) => {
    setTodos(tostos)
  })
}

const onToggle = useCallback(
  (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id)
    )
  }
)


return (
  <>
    <TodoTemplate>
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  </>
)
}

export default App
