import './App.css'
import { Route, Routes } from 'react-router-dom'
import AddBook from './pages/AddBook'
import EditBook from './pages/EditBook'
import BookDetail from './components/BookDetail'
import Error from './components/Error'
import Home from './pages/Home'
import Layout from './components/Layout'
// http://localhost:5173/ => Home
// http://localhost:5173/add => AddBook
// http://localhost:5173/edit/1 EditBook
// http://localhost:5173/books/1 BookDetails
// 잘못된 경로 => Error

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/edit/:id" element={<EditBook />} />
          <Route path="/books/:id" element={<BookDetail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
