import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
    const { electronics_id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        "name": "",
        "company": "",
        "price": 0,
        "image": null
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://127.0.0.1:8000/electronics/${electronics_id}/`);
                const { name, company, price } = res.data;
                setFormData({ name, company, price, image: null });
            } catch (err) {
                console.error("Fetch failed", err);
            }
        };
        fetchData();
    }, [electronics_id]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("name", formData.name);
        data.append("company", formData.company);
        data.append("price", formData.price);
        if (formData.image) {
            data.append("image", formData.image);
        }

        try {
            await axios.put(`http://127.0.0.1:8000/electronics_upd/${electronics_id}`, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            navigate(`/`);
        } catch (err) {
            console.error("Update failed", err);
        }
    };

    return (
        <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
            <h2>Update Destination</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="comapany"
                        value={formData.company}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>New Image (optional):</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" style={{ marginTop: "15px" }}>Update</button>
            </form>
        </div>
    );
}

export default Update;