import ColorSchemesExample from "./components/navbar"
import Electronics from "./components/electronicsdata"
import Sidebar from "./components/sidebar"
import { Routes,Route } from "react-router-dom"

function App() {
  return (
    <>
    <ColorSchemesExample></ColorSchemesExample>
    <div style={{display:'flex'}}>
    <Sidebar></Sidebar>
    <div style={{flex:'1',padding:'20px'}}>
    <Routes>
      <Route path="/" element={<Electronics/>}></Route>
    </Routes>
    </div>
    </div>
    </>
  )
}

export default App
