import axios from "axios";
const baseUrl = process.env.REACT_APP_API_URL;

// Bearer Token
const BearerToken = () =>
  localStorage.getItem("jwt") ? JSON.parse(localStorage.getItem("jwt")) : false;
// Axios Config Instance
const instance = axios.create({
  baseURL: baseUrl,
});
instance.defaults.headers.common["Authorization"] = BearerToken();

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
  instance
    .post("/add-event", {
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
