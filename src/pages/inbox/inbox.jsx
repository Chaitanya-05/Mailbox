import React, { useEffect } from "react";
import "./inbox.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { SideBar } from "../../components/SideBar/SideBar";
import { Mail } from "../../components/Mail/Mail";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FETCH } from "../../redux/actions";

export const Inbox = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch()

  useEffect(() => {
    if (token) {
      navigate("/");
    } else {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiY2Rha2hhbGVAZ21haWwuY29tIiwiaWQiOjI1OSwiZmlyc3ROYW1lIjoiQ2hhaXRhbnlhIiwibGFzdE5hbWUiOiJEYWtoYWxlIn0sImlhdCI6MTcyMjQ1ODI4NCwiZXhwIjoxNzUzOTk0Mjg0fQ.3a6kxddostCevyPxWlO_p3FZuORdRqEUv8W9gJjVp2w";

      const requestOptions = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        redirect: "follow",
      };

      fetch("https://hiring.reachinbox.xyz/api/v1/onebox/list", requestOptions)
        .then((response) => {
          // console.log("Response:", response);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((result) => dispatch({type:FETCH,payload:result.data}))
        .catch((error) => console.error("Fetch error:", error));
    }
  }, []);
  return (
    <div className="inbox" style={{ color: "white" }}>
      <Navbar />
      <SideBar />
      <Mail />
    </div>
  );
};
