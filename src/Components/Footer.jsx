import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#b8f4c1', padding: '40px 20px', fontSize: '14px', color: '#333' }}>
      <div className="footer-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Concerns */}
        <div style={{ flex: '1 1 180px', margin: '10px' }}>
          <h4>Concerns</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {['Weight', 'Skin', 'Daily Well‑being', 'Performance', 'Hair', 'Report An Error']
              .map(item => <li key={item}><a href="#" style={{ color: '#333', textDecoration: 'none' }}>{item}</a></li>)}
          </ul>
        </div>
        
        {/* Learn */}
        <div style={{ flex: '1 1 180px', margin: '10px' }}>
          <h4>Learn</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {['Blog', 'Our Story', 'Personal Guidance', 'Cashback', 'Clean Label Project', 'Pledge A Tree', 'Patch Test Guide', 'Loyalty Club Membership', 'Press']
              .map(item => <li key={item}><a href="#" style={{ color: '#333', textDecoration: 'none' }}>{item}</a></li>)}
          </ul>
        </div>
        
        {/* Connect */}
        <div style={{ flex: '1 1 180px', margin: '10px' }}>
          <h4>Connect</h4>
          <p>Email: <a href="mailto:hello@plixlife.com" style={{ color: '#333' }}>hello@plixlife.com</a></p>
          <p>Phone: <a href="tel:+919321860981" style={{ color: '#333' }}>+91 93218 60981</a> (Mon–Sat, 10 am–7 pm)</p>
          <p><a href="#" style={{ color: '#333' }}>Track your order</a></p>
        </div>
        
        {/* Legal */}
        <div style={{ flex: '1 1 180px', margin: '10px' }}>
          <h4>Legal</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {['Refund & Cancellation', 'Privacy Policy', 'Terms & Conditions']
              .map(item => <li key={item}><a href="#" style={{ color: '#333', textDecoration: 'none' }}>{item}</a></li>)}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr style={{ borderColor: '#e0e0e0', margin: '30px 0' }} />

    

        {/* Newsletter Signup */}
        <div style={{ flex: '1 1 300px', margin: '10px 0' }}>
          <p style={{ margin: '0 0 8px' }}>Sign up for exclusive deals and offers</p>
          <form style={{ display: 'flex', flexWrap: 'wrap' }}>
            <input type="email" placeholder="Your email" style={{ flex: '1 1 auto', padding: '8px', marginRight: '8px', minWidth: '200px' }} />
            <button type="submit" path="/SignUp" as={Link} to="/SignUp" style={{ padding: '8px 16px', backgroundColor: '#3cb46e', color: '#fff', border: 'none' }}>Sign Up</button>
          </form>
        </div>
      

      {/* Copyright */}
      <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '13px', color: '#777' }}>
        © 2025 Plixlife. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
