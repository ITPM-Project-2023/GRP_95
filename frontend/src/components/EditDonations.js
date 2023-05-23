import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditDonations() {
    
        const {id} = useParams();
        const navigate = useNavigate();
        //const effect = useEffect();

        const [values, setValues] = useState({
            id: id,
            title: '',
            image: '',
            description: ''
        });
   
    useEffect(() => {
        function getDonations() {
            axios.get("http://localhost:3000/donation/update/"+id)
            .then((res) => {
                //console.log(res.data);
                setValues({...values, title: res.data.title, image: res.data.image, description: res.data.description});
            }).catch((err) => {
                alert(err.message);
            })
        }
        getDonations();
    }, []);

    //const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3000/donation/"+id, values)
        .then((res) => {
           navigate('/');
        }).catch((err) => {
            alert(err.message);
        })
    };

        return (
            <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Enter a Title" 
                    value={values.title} onChange={e => setValues({...values, title: e.target.value})}/>
                </div>
                <div className="mb-3">
                    <label for="image" className="form-label">Image</label>
                    <input type="file" className="form-control" id="image"  aria-describedby="imageHelp"
                    value={values.image} onChange={e => setValues({...values, image: e.target.value})}/>
                    <div id="imageHelp" className="form-text">Choose file</div>
                </div>
                <div className="mb-3">
                    <label for="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" placeholder="Enter a Description about the Hazard Donation"
                    value={values.description} onChange={e => setValues({...values, description: e.target.value})}/>
                </div>
                <button type="submit" className="btn btn-success">Save</button>
            </form>
        </div>
        )

}

export default EditDonations;