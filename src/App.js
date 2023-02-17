import "./App.css";
import EventForm from "./components/EventForm";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { isAuthenticated } from "./services/auth";

function App() {
  const [auth, setAuth] = useState(null);
  useEffect(() => {
    isAuthenticated().then((response) => {
      setAuth(response);
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/event"
          element={
            <ProtectedRoute isAuth={auth}>
              <EventForm />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
