import React, { useState } from "react";
import styles from "./EventForm.module.css";
import addEvent from "../services/event";

export default function EventForm() {
  const categories = [
    "technical",
    "non-tech",
    "quiz",
    "seminar",
    "hackathon",
    "workshop",
    "business",
    "club-events",
  ];
  const [data, setData] = useState({
    name: "",
    poster: "",
    tags: "",
    category: [],
    description: "",
    location: "",
    date: "",
    time: "",
    whocanjoin: "college",
    limit: "yes",
    contact: "",
  });
  const categoryChangeHandler = (event) => {
    let updatedCategories = [...data.category];
    if (event.target.checked) {
      updatedCategories = [...data.category, event.target.value];
    } else {
      updatedCategories.splice(data.category.indexOf(event.target.value), 1);
    }
    setData({ ...data, category: updatedCategories });
  };
  const imgToBase64 = (img) => {
    let reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => {
      // reader.result => base64 img
      addEvent(
        data.name,
        reader.result,
        data.tags,
        data.category,
        data.description,
        data.location,
        data.date,
        data.time,
        data.whocanjoin,
        data.limit,
        data.contact
      );
    };
  };
  const submitHandler = (e) => {
    e.preventDefault();
    imgToBase64(data.poster);
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label>Event name</label>
      <input
        type="text"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <label>Event poster</label>
      <input
        type="file"
        onChange={(e) => setData({ ...data, poster: e.target.files[0] })}
      />
      <label>Tags</label>
      <input
        type="text"
        value={data.tags}
        onChange={(e) => setData({ ...data, tags: e.target.value })}
      />
      <label>Category (Max 3)</label>
      {categories.map((item, i) => {
        return (
          <div key={i}>
            <input
              value={item}
              type="checkbox"
              onChange={categoryChangeHandler}
            />
            <span>{item}</span>
          </div>
        );
      })}
      <label>Description</label>
      <input
        type="text"
        value={data.description}
        onChange={(e) => setData({ ...data, description: e.target.value })}
      />
      <label>Location</label>
      <input
        type="text"
        value={data.location}
        onChange={(e) => setData({ ...data, location: e.target.value })}
      />
      <label>Date</label>
      <input
        type="date"
        value={data.date}
        onChange={(e) => setData({ ...data, date: e.target.value })}
      />
      <label>Time</label>
      <input
        type="time"
        value={data.time}
        onChange={(e) => setData({ ...data, time: e.target.value })}
      />
      <label>Who can join</label>
      <select
        onChange={(e) => setData({ ...data, whocanjoin: e.target.value })}
        value={data.whocanjoin}
      >
        <option value="college">College Only</option>
        <option value="anyone">Anyone can join</option>
      </select>
      <label>Registration limit</label>
      <select
        onChange={(e) => setData({ ...data, limit: e.target.value })}
        value={data.limit}
      >
        <option value="yes">yes</option>
        <option value="no">no</option>
      </select>
      <label>Contact Info</label>
      <input
        type="text"
        value={data.contact}
        onChange={(e) => setData({ ...data, contact: e.target.value })}
      />
      <button type="submit">submit</button>
    </form>
  );
}
