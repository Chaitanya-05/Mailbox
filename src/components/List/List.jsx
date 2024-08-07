import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./List.css";
import tele from '../../assets/tele.png'

export const List = ({ emails, onSelectEmail, sortEmails }) => {
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

  return (
    <div style={{ height: `${height}px` }} className="list">
      <div className="email-header">
        <div className="header-top">
          <div>
          <h2>All Inbox(s)</h2>
          <i style={{backgroundColor:"#25262b", padding:"3px",borderRadius:"4px"}} onClick={() => window.location.reload()} class="material-icons">refresh</i>
          </div>
            <span>{emails.length} Inboxes selected</span>
        </div>
        <div className="header-bottom">
          <input type="text" placeholder="Search" />
          <div className="sort-options">
            <span>New Replies</span>
            <button onClick={sortEmails}>Newest </button>
          </div>
        </div>
      </div>

      <div className="email-list">
        {emails.map((email) => (
          <div
            key={email.id}
            onClick={() => onSelectEmail(email)}
            className="email-item"
          >
            <div className="email-head">
              <div className="email-head">
              <span className="email-indicator"></span>
              <span className="email-sender">{email.fromEmail}</span>
              </div>
              <span className="email-date">{email.date}</span>
            </div>
            <div className="email-subject">{email.subject}</div>
            <div className="email-tags">
              <span className={`email-status ${email.status}`}>
                {email.statusLabel}
              </span>
              <span className="email-campaign"><img src={tele} alt="" />Campain Name</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
