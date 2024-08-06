import React from 'react'
import { useSelector } from 'react-redux'
import "./List.css"

export const List = ({ emails, onSelectEmail,sortEmails }) => {

  return (

    <div className="list">
    <div className="email-header">
      <div className="header-top">
        <h2>All Inbox(s)</h2>
        <div>
          <span>{emails.length} Inboxes selected</span>
          <button onClick={() => window.location.reload()}>🔄</button>
        </div>
      </div>
      <div className="header-bottom">
        <input type="text" placeholder="Search" />
        <div className="sort-options">
          <span>New Replies</span>
          <button onClick={sortEmails}>Newest ⬇️</button>
        </div>
      </div>
    </div>

    <div className="email-list">
      {emails.map((email) => (
        <div key={email.id} onClick={() => onSelectEmail(email.id)} className="email-item">
          <div className="email-head">
            <span className="email-indicator"></span>
            <span className="email-sender">{email.sender}</span>
            <span className="email-date">{email.date}</span>
          </div>
          <div className="email-subject">{email.subject}</div>
          <div className="email-tags">
            <span className={`email-status ${email.status}`}>{email.statusLabel}</span>
            <span className="email-campaign">{email.campaign}</span>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}
