// LeadDetails.js
import React from 'react';
import './Info.css';

export const Info = () => {
  return (
    <div className="info">
      <div className="lead-details">
        <h3 className="section-title">Lead Details</h3>
        <div className="details">
          <div className="detail-item">
            <span className="detail-label">Name</span>
            <span className="detail-value">Orlando</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Contact No</span>
            <span className="detail-value">+54-9062827869</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Email ID</span>
            <span className="detail-value">orlando@gmail.com</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">LinkedIn</span>
            <span className="detail-value">linkedin.com/in/timvadde/</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Company Name</span>
            <span className="detail-value">Reachinbox</span>
          </div>
        </div>
      </div>
      <div className="activities">
        <h3 className="section-title">Activities</h3>
        <div className="campaign-details">
          <div className="campaign-header">
            <span className="campaign-name">Campaign Name</span>
            <span className="campaign-steps">3 Steps | 5 Days in Sequence</span>
          </div>
          <div className="campaign-steps">
            <div className="step">
              <div className="step-icon">📧</div>
              <div className="step-details">
                <span className="step-title">Step 1: Email</span>
                <span className="step-subtitle">Sent 3rd, Feb</span>
              </div>
            </div>
            <div className="step">
              <div className="step-icon">📨</div>
              <div className="step-details">
                <span className="step-title">Step 2: Email</span>
                <span className="step-subtitle">Opened 5th, Feb</span>
              </div>
            </div>
            <div className="step">
              <div className="step-icon">📨</div>
              <div className="step-details">
                <span className="step-title">Step 3: Email</span>
                <span className="step-subtitle">Opened 5th, Feb</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
