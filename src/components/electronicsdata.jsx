import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios';
import { Link } from "react-router-dom";

function Electronics() {
    let [user, setUser] = useState([]);
    const fetchData = async () => {
        const response = await axios.get("http://127.0.0.1:8000/all/");
        setUser(response.data);
    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="row" style={{ gap: '10px' }}>
            {user.map((x) => (
                <Card style={{ width: '18rem', padding: '5px' }}>
                    <Card.Img variant="top" src={`http://127.0.0.1:8000${x.image}`} />
                    <Card.Body>
                        <Card.Title>{x.name}</Card.Title>
                        <Card.Text>
                            {x.company}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>{x.price}</ListGroup.Item>
                    </ListGroup>
                    <Link to={`more/${x.electronic_id}`}>
                        <button style={{ backgroundColor: '#04AA6D', color: 'white', padding: '5px', width: '100%' }}>View More</button>
                    </Link>
                </Card>
            ))}

        </div>

    )
}

export default Electronics;