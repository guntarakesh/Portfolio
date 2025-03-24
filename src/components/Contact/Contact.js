import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = (e) => {
    e.preventDefault();

    const { name, email, subject, phone, message } = formData;

    // Format the body
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AMessage: ${message}`;

    // Create mailto link
    const mailtoLink = `mailto:guntarakesh7@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    // Redirect to mail client
    window.location.href = mailtoLink;
  };

  return (
    <div className="container-contact">
      <div className="sec-title">
        <div className="title">Contact Us</div>
        <h2 className="lets">Let's Get in Touch.</h2>
      </div>
      <div className="inner-container">
        <div className="row clearfix">
          <div className="form-column col-md-8 col-sm-12 col-xs-12">
            <div className="inner-column">
              <div className="contact-form">
                <form onSubmit={handleSend}>
                  <div className="row clearfix">
                    <div className="form-group col-md-6 col-sm-6 co-xs-12">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group col-md-6 col-sm-6 co-xs-12">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group col-md-6 col-sm-6 co-xs-12">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group col-md-6 col-sm-6 co-xs-12">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group col-md-12 col-sm-12 co-xs-12">
                      <textarea
                        name="message"
                        placeholder="Message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group col-md-12 col-sm-12 co-xs-12">
                      <button type="submit" className="theme-btn btn-style-one">
                        Send Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
