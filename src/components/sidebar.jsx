function Sidebar() {
    return (
        <div className="d-flex">
            <div className="bg-dark text-white vh-100 p-3" style={{ width: "250px" }}>
                <ul className="nav flex-column">
                    <li className="nav-item"><a href="#" className="nav-link text-white">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link text-white">About</a></li>
                    <li className="nav-item"><a href="#" className="nav-link text-white">Services</a></li>
                    <li className="nav-item"><a href="#" className="nav-link text-white">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}


export default Sidebar;