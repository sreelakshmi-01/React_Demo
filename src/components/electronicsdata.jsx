import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios';

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
                <Card style={{ width: '18rem' }}>
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
                </Card>
            ))}

        </div>

    )
}

export default Electronics;