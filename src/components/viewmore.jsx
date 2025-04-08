import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'

function ViewMore(){
    const {electronic_id} = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState({})
    const fetchData = async()=>{
        try{
            const response = await axios.get(`http://127.0.0.1:8000/electronics/${electronic_id}/`)
            setData(response.data)
        }catch(error){
            console.log(error)
        }
    }
    const handleDelete = async()=>{
        try{
            await axios.delete(`http://127.0.0.1:8000/electronics_del/${electronic_id}`)
            navigate('/')
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
    return(
        <div>
            <Card style={{ width: '18rem', padding:'5px' }}>
                    <Card.Img variant="top" src={`http://127.0.0.1:8000${data.image}`} />
                    <Card.Body>
                        <Card.Title>{data.name}</Card.Title>
                        <Card.Text>
                            {data.company}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>{data.price}</ListGroup.Item>
                    </ListGroup>
                    <button onClick={handleDelete} style={{backgroundColor:'red', color:'white', padding:'5px'}}>Delete</button>
                    </Card>
        </div>
    )
}
export default ViewMore;