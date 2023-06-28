import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function TeacherPage() {
  const [suc, setSuc] = useState();
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:3001", { email, password })
      .then((res) => {
        if (res.data === "Success") {
          setSuc("Hello teacher");
        } else {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h2>Teacher's page</h2>;<p>{suc}</p>
    </div>
  );
}

export default TeacherPage;
