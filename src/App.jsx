import ColorSchemesExample from "./components/navbar"
import Sidebar from "./components/sidebar"
import Electronics from "./components/electronicsdata"

function App() {
  return (
    <div>
      <ColorSchemesExample></ColorSchemesExample>
      <div className="d-flex">
        <Sidebar />
        <div className="ms-3">
          <Electronics></Electronics>
        </div>
      </div>
    </div>

  )
}

export default App
