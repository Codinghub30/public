import React from 'react';
import partnersimage1 from '../images/partnersimage1.png';
import partnersimage2 from '../images/partnersimage2.png';
import partnersimage3 from '../images/partnersimage3.png';
import partnersimage4 from '../images/partnersimage4.png';
import partnersimage5 from '../images/partnersimage5.png';
import partnersimage6 from '../images/partnersimage6.png';
import partnersimage7 from '../images/partnersimage7.png';
import partnersimage8 from '../images/partnersimage8.png';
import partnersimage9 from '../images/partnersimage9.png';
import partnersimage10 from '../images/partnersimage10.png';
import partnersimage11 from '../images/partnersimage11.png';
import partnersimage12 from '../images/partnersimage12.png';
import partnersimage13 from '../images/partnersimage13.png';
import partnersimage14 from '../images/partnersimage14.png';
import partnersimage15 from '../images/partnersimage15.png';
import partnersimage16 from '../images/partnersimage16.png';
import partnersimage17 from '../images/partnersimage17.png';
import partnersimage18 from '../images/partnersimage18.png';
import partnersimage19 from '../images/partnersimage19.png';
import partnersimage20 from '../images/partnersimage20.png';
import partnersimage21 from '../images/partnersimage21.png';
import partnersimage22 from '../images/partnersimage22.png';
import partnersimage23 from '../images/partnersimage23.png';
import partnersimage24 from '../images/partnersimage24.png';
import partnersimage25 from '../images/partnersimage25.png';
import partnersimage26 from '../images/partnersimage26.png';
import partnersimage27 from '../images/partnersimage27.png';
import partnersimage28 from '../images/partnersimage28.png';
import partnersimage29 from '../images/partnersimage29.png';
import partnersimage30 from '../images/partnersimage30.png';
import partnersimage31 from '../images/partnersimage31.png';
import partnersimage32 from '../images/partnersimage32.png';

const PartnersPage = () => {
  const partnerImages = [
    partnersimage1,
    partnersimage2,
    partnersimage3,
    partnersimage4,
    partnersimage5,
    partnersimage6,
    partnersimage7,
    partnersimage8,
    partnersimage9,
    partnersimage10,
    partnersimage11,
    partnersimage12,
    partnersimage13,
    partnersimage14,
    partnersimage15,
    partnersimage16,
    partnersimage17,
    partnersimage18,
    partnersimage19,
    partnersimage20,
    partnersimage21,
    partnersimage22,
    partnersimage23,
    partnersimage24,
    partnersimage25,
    partnersimage26,
    partnersimage27,
    partnersimage28,
    partnersimage29,
    partnersimage30,
    partnersimage31,
    partnersimage32,
  ]; // Replace these with actual image paths or URLs

  return (
    <div
      className="partners-page"
      style={{
      marginTop:'8%',
        
      }}
    >
      <h1
        className="text-center"
        style={{
          fontWeight: 'bold',
          marginBottom: '30px',
          color: '#333',
        }}
      >
        Our Partners
      </h1>
      <div className="container">
        <div className="row">
          {partnerImages.map((image, index) => (
            <div
              className="col-6 col-md-3 mb-4"
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={image}
                alt={`Partner ${index + 1}`}
                className="img-fluid"
                style={{
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;
