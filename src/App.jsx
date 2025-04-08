import ColorSchemesExample from "./components/navbar"
import Electronics from "./components/electronicsdata"
import Sidebar from "./components/sidebar"
import { Routes, Route } from "react-router-dom"
import ViewMore from "./components/viewmore"
import Add from "./components/Add"

function App() {
  return (
    <>
      <ColorSchemesExample></ColorSchemesExample>
      <div style={{ display: 'flex' }}>
        <Sidebar></Sidebar>
        <div style={{ flex: '1', padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Electronics />}></Route>
            <Route path="more/:electronic_id" element={<ViewMore />}></Route>
            <Route path="/add" element={<Add />}></Route>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App;