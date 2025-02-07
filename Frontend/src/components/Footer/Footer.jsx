import React from 'react';

const Footer = () => {
  return (
    <footer className='p-3 bg-white text-dark d-flex justify-content-between mt-auto border border-dark rounded-top'>
      <div className="footer-links col d-flex justify-content-around">
        <a href="/become-seller" className='text-dark text-decoration-none'>
          Become Seller
        </a>
        <a href="/gift-cards " className='text-dark text-decoration-none'>
          Gift Cards
        </a>
        <a href="/help-center" className='text-dark text-decoration-none'>
          Help Center
        </a>
      </div>
      <div className="footer-terms col d-flex justify-content-around">
        <a href="/terms-of-service" className='text-dark text-decoration-none'>Terms of Service</a>
        <a href="/privacy-policy" className='text-dark text-decoration-none'>Privacy & Policy</a>
      </div>
      <div className="footer-copyright col d-flex justify-content-around">
        <p>All Right reserved by Asir | 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
