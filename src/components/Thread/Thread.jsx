import React, { useEffect, useState, dangerouslySetInnerHTML } from "react";
import "./Thread.css";
import DOMPurify from "dompurify";
import empty from "../../assets/beginning.png";
import dark from "../../assets/showdark.png";
import reply from "../../assets/reply.png"

export const Thread = ({ email, onBack }) => {
  if (!email) return <img style={{ width: "100%" }} src={empty} alt="" />;

  const [showAllReplies, setShowAllReplies] = useState(false);
  const [thread, setThread] = useState(null);
  const [height, setHeigth] = useState(window.innerHeight - 70);

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(null, args);
      }, delay);
    };
  };

  useEffect(() => {
    const handleResize = debounce(() => {
      setHeigth(window.innerHeight - 70);
    }, 500);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggleReplies = () => {
    setShowAllReplies(!showAllReplies);
  };

  useEffect(() => {
    var token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiY2Rha2hhbGVAZ21haWwuY29tIiwiaWQiOjI1OSwiZmlyc3ROYW1lIjoiQ2hhaXRhbnlhIiwibGFzdE5hbWUiOiJEYWtoYWxlIn0sImlhdCI6MTcyMjQ1ODI4NCwiZXhwIjoxNzUzOTk0Mjg0fQ.3a6kxddostCevyPxWlO_p3FZuORdRqEUv8W9gJjVp2w";

    var requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      redirect: "follow",
    };

    fetch(
      `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${email.threadId}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data);
        setThread(result.data);
      })
      .catch((error) => console.log("error", error));

    return () => {};
  }, [email]);

  const mail = (email) => {
    const sanitizedContent = DOMPurify.sanitize(email.body);

    // Original date string
    const dateStr = email.createdAt;

    // Convert to Date object
    const date = new Date(dateStr);

    // Options for toLocaleDateString
    const options = { month: "short", day: "numeric" };

    // Format the date
    const formattedDate = date.toLocaleDateString("en-US", options);

    

    return (
      <>
        <div class="container">
          <div class="line"></div>
          <div class="center-content">
            {formattedDate}
          </div>
          <div class="line"></div>
        </div>
        <div className="email-content">
          <div className="email-message">
            <div className="email-meta">
              <h3>{email.subject}</h3>
              <p>20 June 2022 : 9:16AM</p>
            </div>
            <div className="email-body">
              <p>
                from : {email.fromEmail} {email.cc[0] && `cc : ${email.cc}`}
                <br />
                <br />
                to : {email.toEmail}
                <br />
                <br />
              </p>
              <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div style={{ height: `${height}px` }} className="thread">
      <div className="thread-header">
        <div className="sender-info">
          <h2>Orlando</h2>
          <p>orlando@gmail.com</p>
        </div>
        <div className="status-buttons">
          <button className="status-button">Meeting Completed</button>
          <button className="move-button">Move</button>
        </div>
      </div>
      <div style={{ margin: "30px" }}>
        {mail(email)}

        {/* <button className="view-replies-button" onClick={handleToggleReplies}>
          {showAllReplies ? "Hide replies" : "View all 4 replies"}
        </button> */}
        {!showAllReplies && thread && (
          <div
            style={{ cursor: "pointer" }}
            class="container"
            onClick={handleToggleReplies}
          >
            <div class="line"></div>
            <div class="center-content">
              <img
                src={dark}
                style={{ height: "20px", marginRight: "5px" }}
                alt=""
              />
              Show all replies
            </div>
            <div class="line"></div>
          </div>
        )}

        {showAllReplies && <>{thread.map((email) => mail(email))}</>}

        <img style={{marginTop:"20px"}} src={reply} alt="" />
      </div>
    </div>
  );
};
