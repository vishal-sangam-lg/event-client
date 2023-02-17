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

export default async function login(user) {
  const response = await instance.post("/login", {
    email: user.email,
    password: user.password,
  });
  if (response.data.accessToken) {
    localStorage.setItem("jwt", JSON.stringify(response.data.accessToken));
    localStorage.setItem("email", response.data.email);
    window.location.href = "/event";
    return response.data.accessToken;
  } else {
    return response.data;
  }
}

export async function isAuthenticated() {
  return localStorage.getItem("jwt")
    ? JSON.parse(localStorage.getItem("jwt"))
    : false;
  //   if (localStorage.getItem("jwt")) {
  //     JSON.parse(localStorage.getItem("jwt"));
  //     const response = await instance.post("/is-auth");
  //     console.log(response);
  //     if (response.data === "Authenticated") {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   } else {
  //     return false;
  //   }
}

export function Logout() {
  localStorage.removeItem("jwt");
  localStorage.removeItem("email");
  window.location.href = "/";
}
