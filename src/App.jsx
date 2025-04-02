import ColorSchemesExample from "./components/navbar"
import Sidebar from "./components/sidebar"
import AddSub from "./components/addsubtract"

function App() {
  return (
    <div>
      <ColorSchemesExample></ColorSchemesExample>
      <div className="d-flex">
        <Sidebar />
        <div className="ms-3">
          <AddSub />
        </div>
      </div>
    </div>

  )
}

export default App
