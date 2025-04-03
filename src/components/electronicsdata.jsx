import { use, useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function Electronics() {
    let [user, setUser] = useState([])
    const fetchData = async () => {
        const response = await axios.get("https://dummyjson.com/users")
        setData(response.data.users)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className="row">
            {user.map((x)=>(
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{x.firstName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{x.email}</Card.Subtitle>
                    <Card.Text>
                        {x.address}
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
            ))}

        </div>
        
    )
}