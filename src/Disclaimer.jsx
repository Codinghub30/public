import React from 'react';
import './Terms.css'

const Disclaimer = () => {
  return (
    <div className='terms-condition'
      // style={{
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   minHeight: '100vh',
      //   backgroundColor: '#f9f9f9',
      //   padding: '20px',
      //   marginTop: '6%',
      // }}
    >
      <div className='terms-container'
        style={{
          maxWidth: '1000px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          fontFamily: 'Poppins, sans-serif',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          padding: '30px',
          lineHeight: '1.6',
          textAlign: 'left',
        }}
      >
        <h1 style={{ fontSize: '24px', marginBottom: '20px', color: '#1a76d8', textAlign: 'left' }}>
          Disclaimer
        </h1>

        <p style={{ textAlign: 'left' }}>
          Make My Documents is not a Government-run website, and the form provided is not the official registration
          form. It is solely designed to collect information from our clients to help our experts better understand
          their needs.
        </p>

        <p style={{ textAlign: 'left' }}>
          By proceeding with this website, you acknowledge and agree that Make My Documents is a private company
          managing this platform. We provide assistance and consultancy services based on the requests from our
          customers. The fees collected on this website include consultancy charges.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
