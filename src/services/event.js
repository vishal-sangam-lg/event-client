import axios from "axios";

export default function addEvent(
  name,
  poster,
  tags,
  category,
  description,
  location,
  date,
  time,
  whocanjoin,
  limit,
  contact
) {
  axios
    .post("http://localhost:8000/add-event", {
      name: name,
      poster: poster,
      tags: tags,
      category: category,
      description: description,
      location: location,
      date: date,
      time: time,
      whocanjoin: whocanjoin,
      limit: limit,
      contact: contact,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
