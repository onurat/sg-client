import React from 'react';
import './testimonials.css';

function Testimonials({ testimonials }) {
  return (
    <div className="testimonials">
      <h2 className="testimonials-title">Customer Testimonials</h2>
      <div className="testimonial-list">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <p className="testimonial-text">{testimonial.text}</p>
            <p className="testimonial-author">{testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
