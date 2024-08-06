import React, { useEffect, useState } from 'react'
import { List } from '../List/List'
import { Thread } from '../Thread/Thread'
import { Info } from '../Info/Info'
import './Mail.css'
import { useSelector } from 'react-redux'

export const Mail = () => {
  const [selectedEmailId, setSelectedEmailId] = useState(null);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 550);

  // const emails  = useSelector(state=>state.data)
  const [emails, setEmails] = useState([
    { id: 1, sender: 'Beata@gmail.com', subject: "I've tried a lot and .", date: 'Mar 7', updatedAt: '2023-11-23T07:38:46.000Z', status: 'Interested', statusLabel: 'Interested', campaign: 'Campaign Name', body: 'Email body content' },
    { id: 2, sender: 'Sanya@gmail.com', subject: "I've tried a lot and .", date: 'Mar 7', updatedAt: '2023-11-22T07:38:46.000Z', status: 'Closed', statusLabel: 'Closed', campaign: 'Campaign Name', body: 'Email body content' },
    { id: 3, sender: 'william@gmail.com', subject: 'Payment not going through', date: 'Mar 7', updatedAt: '2023-11-21T07:38:46.000Z', status: 'Interested', statusLabel: 'Interested', campaign: 'Campaign Name', body: 'Email body content' },
    { id: 4, sender: 'johnson@gmail.com', subject: 'Could you tell me more about it', date: 'Mar 7', updatedAt: '2023-11-20T07:38:46.000Z', status: 'Meeting', statusLabel: 'Meeting Booked', campaign: 'Campaign Name', body: 'Email body content' },
    { id: 5, sender: 'orlando@gmail.com', subject: 'Hi, I am interested', date: '18:30', updatedAt: '2023-11-19T07:38:46.000Z', status: 'Meeting', statusLabel: 'Meeting Completed', campaign: 'Campaign Name', body: 'Email body content' },
    // Add more emails as needed
  ]);

  const selectedEmail = emails.find((email) => email.id === selectedEmailId);
  
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

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSelectEmail = (id) => {
    setSelectedEmailId(id);
  };

  const handleBack = () => {
    setSelectedEmailId(null);
  };

  const sortEmails = () => {
    const sortedEmails = [...emails].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    setEmails(sortedEmails);
  };


  return (
    <div className="mail">
      {isMobileView ? (
        selectedEmailId ? (
          <Thread email={selectedEmail} onBack={handleBack} />
        ) : (
          <List emails={emails} onSelectEmail={handleSelectEmail} sortEmails={sortEmails} />
        )
      ) : (
        <>
          <List emails={emails} onSelectEmail={handleSelectEmail} />
          <Thread email={selectedEmail}  onBack={handleBack}/>
          <Info/>
        </>
      )}
    </div>
  );
};



