import { Routes, Route } from "react-router-dom"

import {Main, Users, NotFound} from "./pages"
import { Header } from "./components/Base" 

function App() {
  // console.log (process.env.REACT_APP_BASE_URL)
console.log(import.meta.env.VITE_API_BASE_URL)
  return (
    <>
    <Header />
    <Routes>
    <Route path="/" element={<Main />}/>
    <Route path="users" element={<Users/>}/>
    <Route path='*' element={<NotFound />}/>
</Routes>
    </>
  )
}

export default App
