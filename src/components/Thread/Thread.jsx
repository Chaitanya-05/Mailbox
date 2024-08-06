import React, { useState } from 'react';
import './Thread.css';

export const Thread = () => {
  const [showAllReplies, setShowAllReplies] = useState(false);

  const handleToggleReplies = () => {
    setShowAllReplies(!showAllReplies);
  };

  return (
    <div className="thread">
      <div className="email-header">
        <div className="sender-info">
          <h2>Orlando</h2>
          <p>orlando@gmail.com</p>
        </div>
        <div className="status-buttons">
          <button className="status-button">Meeting Completed</button>
          <button className="move-button">Move</button>
        </div>
      </div>

      <div className="email-content">
        <div className="email-date">
          <span>Today</span>
        </div>
        <div className="email-message">
          <div className="email-meta">
            <p>20 June 2022 : 9:16AM</p>
          </div>
          <div className="email-body">
            <h3>New Product Launch</h3>
            <p>
              from : jeanne@icloud.com cc : lennon.j@mail.com<br />
              to : lennon.j@mail.com<br /><br />
              Hi {`{FIRST_NAME}`},<br /><br />
              I would like to introduce you to SaaSgrow, a productized design service specifically tailored for SaaS startups. Our aim is to help you enhance the user experience and boost the visual appeal of your software products.
            </p>
          </div>
        </div>
      </div>

      <button className="view-replies-button" onClick={handleToggleReplies}>
        {showAllReplies ? 'Hide replies' : 'View all 4 replies'}
      </button>

      {showAllReplies && (
        <div className="email-replies">
          {/* Add the email replies here */}
          {/* This is just an example, you would map through your actual email replies */}
          <div className="email-reply">Reply 1</div>
          <div className="email-reply">Reply 2</div>
          <div className="email-reply">Reply 3</div>
          <div className="email-reply">Reply 4</div>
        </div>
      )}

      <button className="reply-button">Reply</button>
    </div>
  );
};


