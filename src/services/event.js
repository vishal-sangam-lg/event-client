import axios from "axios";

export default function addEvent(data) {
    axios.post("http://localhost:8000/add-event", {
        data: data
    }).then(res => console.log(res)).catch(err => console.log(err))
}