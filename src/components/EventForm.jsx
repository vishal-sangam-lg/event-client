import React, { useState } from "react";
import styles from "./EventForm.module.css";
import addEvent from "../services/event";

export default function EventForm() {
    const[data, setData] = useState({
        name: "",
        poster: "",
        tags: "",
        category: "",
        description: "",
        location: "",
        whocanjoin: "college",
        limit: "yes",
        contact: ""
    })
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(data);
        addEvent(data);
    }
    return(
        <form className={styles.form} onSubmit={submitHandler}>
            <label>Event name</label>
            <input type="text" value={data.name} onChange={(e) => setData({...data, name: e.target.value})} />
            <label>Event poster</label>
            <input type="text" value={data.poster} onChange={(e) => setData({...data, poster: e.target.value})} />
            <label>Tags</label>
            <input type="text" value={data.tags} onChange={(e) => setData({...data, tags: e.target.value})} />
            <label>Category</label>
            <input type="text" value={data.category} onChange={(e) => setData({...data, category: e.target.value})} />
            <label>Description</label>
            <input type="text" value={data.description} onChange={(e) => setData({...data, description: e.target.value})} />
            <label>Location</label>
            <input type="text" value={data.location} onChange={(e) => setData({...data, location: e.target.value})} />
            <label>Who can join</label>
            <select onChange={(e) => setData({...data, whocanjoin: e.target.value})} value={data.whocanjoin}
            >
                <option value="college">College Only</option>
                <option value="anyone">Anyone can join</option>
            </select>
            <label>Registration limit</label>
            <select onChange={(e) => setData({...data, limit: e.target.value})} value={data.limit}
            >
                <option value="yes">yes</option>
                <option value="no">no</option>
            </select>
            <label>Contact Info</label>
            <input type="text" value={data.contact} onChange={(e) => setData({...data, contact: e.target.value})} />
            <button type="submit">submit</button>
        </form>
    )
}