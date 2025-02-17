import React from 'react';
import './Terms.css'


const Terms = () => {
  return (
    <div className='terms-condition'
      // style={{
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   minHeight: '100vh',
      //   backgroundColor: '#f9f9f9',
      //   padding: '20px',
      //   marginTop:'6%'
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
          fontFamily: 'Arial, sans-serif',
          lineHeight: '1.6',
          textAlign: 'left',
        }}
      >
        <h1 style={{ fontSize: '24px', marginBottom: '20px' ,color:'#1a76d8', textAlign:'left' }}>Terms & Conditions</h1>

        <p style={{textAlign:'left'
        }}> 
          This agreement incorporates the terms and conditions for MakeMyDocuments to provide services to the person
          intending to get assistance or inquiring for any services of MakeMyDocuments by using the
          MakeMyDocuments.com website or any other customer interface channels of MakeMyDocuments, including its
          salespersons, offices, call centers, advertisements, information campaigns, etc.
        </p>

     
        <p style={{textAlign:'left'}}>
          The Users availing services from MakeMyDocuments shall be deemed to have read, understood, and expressly
          accepted the terms and conditions of this agreement, which shall govern the desired transaction or provision
          of such services by MakeMyDocuments for all purposes.
        </p>

        <p style={{ textAlign: 'left' }}>
    We are not passport/PAN card sellers and do not collect any of the client's original documents.
  </p>
  <p style={{ textAlign: 'left' }}>
    As travel agents, we frequently update ourselves regarding passport and visa-related services. Hence, here you
    will get accurate assistance regarding passports, visas, and PAN cards.
  </p>
  <p style={{ textAlign: 'left' }}>
    We take liability only for emails and phone calls from the authorized mail ID and phone numbers.
  </p>
  <p style={{ textAlign: 'left' }}>
    We are not responsible for any unauthorized mail usage or phone calls.
  </p>


       
  <p style={{ textAlign: 'left' }}>
    The User shall be completely responsible for all charges, fees, duties, taxes, and assessments arising out of the
    use of the services.
  </p>
  <p style={{ textAlign: 'left' }}>
    In case of short charging by MakeMyDocuments for listing, services, transaction fees, or any other reason,
    MakeMyDocuments reserves the right to claim the balance amount.
  </p>
  <p style={{ textAlign: 'left' }}>
    Any increase in price charged by MakeMyDocuments on account of changes in tax rates or imposition of new taxes by
    the Government shall be borne by the customer.
  </p>

        
  <p style={{ textAlign: 'left' }}>
    In rare cases where proper service cannot be provided for any reason, we will process the refund and inform the
    customer of the same.
  </p>
  <p style={{ textAlign: 'left' }}>
    There will be no refund option if the customer wishes to cancel the service in the last stage of the process.
  </p>
  <p style={{ textAlign: 'left' }}>
    The booking/consulting charge is non-refundable.
  </p>

       
        <p style={{ textAlign: 'left' }}>
          Once payment has been made and all documents are verified, the customer can postpone the service up to three
          months without any penalty fee.
        </p>

      
        <p style={{ textAlign: 'left' }}>
          If a customer takes the help of any third party, MakeMyDocuments will not process the application further.
        </p>

       
        <p style={{ textAlign: 'left' }}>
    MakeMyDocuments is not responsible for crowding or delays in government offices.
  </p>
  <p style={{ textAlign: 'left' }}>
    Being an online platform, MakeMyDocuments does not accompany any customer to government offices physically.
  </p>

       
        <p style={{ textAlign: 'left' }}>
          Once the ready documents courier is dispatched, it is entirely under the authority of the third party, and
          MakeMyDocuments has no control over its arrival period.
        </p>
      </div>
    </div>
  
  );

};

export default Terms;
