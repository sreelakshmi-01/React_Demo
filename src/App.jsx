import ColorSchemesExample from "./components/navbar"
import Sidebar from "./components/sidebar"
import Electronics from "./components/electronicsdata"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add" element={<AddData />}></Route>
        <Route path="/more/:id" element={<More />}></Route>
        <Route path="/fetch" element={<FetchUsers />}></Route>
      </Routes>
    </>
  )
}

export default App
