import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';  // Import for routing if using react-router
import failureImage from "../src/images/failurepage.svg";

const FailurePayment = ({ lead }) => {
  const paymentStatus = lead?.paymentStatus;
  const isPaymentFailed = paymentStatus !== "paid";

  const navigate = useNavigate();  // For react-router

  if (!isPaymentFailed) {
    return null;
  }
  const handleBackToHome = () => {
    navigate('/');  // Correct usage of navigate function to go to home
  };
  return (
    <div style={styles.container}>
      <img 
        src={failureImage}
        alt="Payment Failure" 
        style={styles.failureImage} 
      />
      <h1 style={styles.heading}>Payment Failed</h1>
      <p style={styles.message}>
        Unfortunately, your payment was not completed successfully.
      </p>
      
      {/* Back to Home Button */}
      <button onClick={handleBackToHome} style={styles.retryButton}>
        Back to Home
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    marginTop: '-9%',
  },
  heading: {
    fontSize: '2em',
    color: '#f44336',
  },
  message: {
    fontSize: '1.2em',
    color: '#f44336',
  },
  failureImage: {
    marginTop: '20px',
    width: '300px',
    height: '300px',
  },
  retryButton: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1em',
    backgroundColor: '#ff9800',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  '@media (max-width: 768px)': {
    container: {
      padding: '30px',
      marginTop: '-37%',
    },
    heading: {
      fontSize: '1.8em',
    },
  }
};

export default FailurePayment;
