import React from 'react';
import './Terms.css'

const PrivacyPolicy = () => {
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
          Privacy Policy
        </h1>

        <p style={{textAlign:'left'}}>
          MakeMyDocuments recognizes the importance of privacy of its users and also of maintaining confidentiality of information provided by its users.
        </p>

        <p style={{textAlign:'left'}}>
          This Privacy Policy provides for the practices for handling and securing user's Personal Information by MakeMyDocuments and its subsidiaries and affiliates.
        </p>

        <h2 style={{ fontSize: '20px', color: 'black', fontWeight:'bold' }}>1. Commitment to Privacy</h2>
        <p style={{textAlign:'left'}}>
          We are committed to protecting your privacy. We collect the minimum amount of information about you that is commensurate with providing you with a satisfactory service. This Policy indicates the type of processes that may result in data being collected about you. The purpose of this Privacy Policy is to enable you to understand which personal identifying information ("PII", "Personal Information") of yours is collected, how and when we might use your information, who has access to this information, and how you can correct any inaccuracies in the information.
        </p>

        <p style={{textAlign:'left'}}>
          To better protect your privacy, we provide this notice explaining our online information practices and the choices you can make about the way your information is collected and used. To make this notice easy to find, we make it available on our website.
        </p>

        <h2 style={{ fontSize: '20px',  color: 'black', fontWeight:'bold' }}>2. Information Collected</h2>
        <p style={{textAlign:'left'}}>
          We may collect any or all of the information via both automated means such as communications profiles and cookies. Personal Information you give us depends on the type of service, support, or sale inquiry, and may include:
        </p>
        <p style={{textAlign:'left'}}>Your name, address, telephone number, fax number, and email address</p>
        <p style={{textAlign:'left'}}>Dates of service provided</p>
        <p style={{textAlign:'left'}}>Types of service provided</p>
        <p style={{textAlign:'left'}}>Payment history, manner of payment, amount of payments, date of payments</p>
        <p style={{textAlign:'left'}}>Domain name, credit card, or other payment information</p>

        <p style={{textAlign:'left'}}>
          The financial information will be transferred only to bill you for the products and services you purchased. If you purchase by credit card, this information may be forwarded to your credit card provider. All sensitive information is collected on a secure server and data is transferred. When transferring personal information, a security icon will appear in your browser.
        </p>

        <h2 style={{ fontSize: '20px',  color: 'black', fontWeight:'bold' }}>3. Disclosing Information</h2>
        <p style={{textAlign:'left'}}>
          We do not disclose any personal information obtained about you from this website to third parties. We may use the information to keep in contact with you and inform you of developments associated with our business. You will be given the opportunity to opt out from any mailing list or similar device.
        </p>
        <p style={{textAlign:'left'}}>
          However, we may disclose aggregate, anonymous data based on information collected from users to potential partners, our affiliates, and reputable third parties. We take all available measures to select affiliates and service providers that are ethical and provide similar privacy protection to their customers and the community. We do not make any representations about the practices and policies of these companies.
        </p>

        <h2 style={{ fontSize: '20px',  color: 'black', fontWeight:'bold' }}>4. Changes to this Policy</h2>
        <p style={{textAlign:'left'}}>
          Any changes to our Privacy Policy will be placed here and will supersede this version of our Policy. We will take reasonable steps to draw your attention to any changes in our Policy. However, to be on the safe side, we suggest that you read this document each time you use the website to ensure that it still meets with your approval.
        </p>

        <h2 style={{ fontSize: '20px', color: 'black', fontWeight:'bold' }}>5. Agreement to Policy</h2>
        <p style={{textAlign:'left'}}>
          By using or accessing the Website or other Sales Channels, the User hereby agrees with the terms of this Privacy Policy and the contents herein. If you disagree with this Privacy Policy, please do not use or access our Website or other Service Channels.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
