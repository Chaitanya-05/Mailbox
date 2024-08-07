import React, { useEffect, useState } from "react";
import { List } from "../List/List";
import { Thread } from "../Thread/Thread";
import { Info } from "../Info/Info";
import "./Mail.css";
import { useSelector } from "react-redux";

export const Mail = () => {
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 550);





  const emails  = useSelector(state=>state.data) ||[]
  // const [emails, setEmails] = useState([]);

  // useEffect(() => {
  //   const token =
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiY2Rha2hhbGVAZ21haWwuY29tIiwiaWQiOjI1OSwiZmlyc3ROYW1lIjoiQ2hhaXRhbnlhIiwibGFzdE5hbWUiOiJEYWtoYWxlIn0sImlhdCI6MTcyMjQ1ODI4NCwiZXhwIjoxNzUzOTk0Mjg0fQ.3a6kxddostCevyPxWlO_p3FZuORdRqEUv8W9gJjVp2w";

  //   const requestOptions = {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //     redirect: "follow",
  //   };

  //   fetch("https://hiring.reachinbox.xyz/api/v1/onebox/list", requestOptions)
  //     .then((response) => response.json()) // Assuming the response is JSON, otherwise use response.text()
  //     .then((result) => setEmails(result.data))
  //     .catch((error) => console.log("error", error));

  //   return () => {};
  // }, []);

  // const selectedEmail = emails.find((email) => email.id === selectedEmailId);

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
      setIsMobileView(window.innerWidth < 550);
    }, 300);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSelectEmail = (email) => {
    setSelectedEmail(email);
    console.log(selectedEmail)
  };

  const handleBack = () => {
    setSelectedEmail(null);
  };

  const sortEmails = () => {
    // const sortedEmails = [...emails].sort(
    //   (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
    // );
    // setEmails(sortedEmails);
  };

  return (
    <div className="mail">
      {isMobileView ? (
        selectedEmail ? (
          <Thread email={selectedEmail} onBack={handleBack} />
        ) : (
          <List
            emails={emails}
            onSelectEmail={handleSelectEmail}
            sortEmails={sortEmails}
          />
        )
      ) : (
        <>
          <List emails={emails} onSelectEmail={handleSelectEmail} />
          <Thread email={selectedEmail} onBack={handleBack} />
          <Info />
        </>
      )}
    </div>
  );
};
