import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Add() {
    const [data, setData] = useState({
        "name": "",
        "company": "",
        "price": 0,
        "image": null
    })
    const navigate = useNavigate()
    const InputData = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        let files = e.target.files;
        console.log(name)
        console.log(value)
        console.log(files)
        let newData;
        if (files) {
            newData = { ...data, [name]: files[0] }
            setData(newData)
        } else {
            newData = { ...data, [name]: value }
            setData(newData)
        }
    }
    const handleData = async () => {
        try {
            const response = await axios.post("http://127.0.0.1:8000/add", data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            navigate('/')
        } catch (error) {
            console.log("There was an error", error)
        }
    }
    const submitData = () => {
        handleData()
    }
    return (
        <>
            <div style={{ maxWidth: "400px", margin: "auto" }}>
                <h2>Add Product</h2>
                <form >
                    <div>
                        <label>Product Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={InputData}
                            required
                        />
                    </div>
                    <div>
                        <label>Company:</label>
                        <input
                            type="text"
                            name="company"
                            value={data.company}
                            onChange={InputData}
                            required
                        />
                    </div>
                    <div>
                        <label>Price:</label>
                        <input
                            type="number"
                            name="price"
                            value={data.price}
                            onChange={InputData}
                            required
                        />
                    </div>
                    <div>
                        <label>Image:</label>
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={InputData}
                            required
                        />
                    </div>
                    <button type="button" onClick={submitData} style={{ marginTop: "10px" }}>
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}
export default Add;