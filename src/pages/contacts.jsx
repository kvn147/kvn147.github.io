import React, { useState } from 'react';
import linkedin from "../assets/linkedin-icon.svg";
import github from "../assets/github-icon.svg";
import mail from "../assets/mail-icon.svg";
import { Link } from 'react-router-dom';

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      // Clear form on success
      setFormData({ name: '', email: '', message: '' });
      setStatus({
        submitting: false,
        success: true,
        error: null
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);
      
    } catch (error) {
      setStatus({
        submitting: false,
        success: false,
        error: error.message
      });
    }
  };

  return (
    <div data-property="Desktop" className="self-stretch px-24 pb-16 bg-white inline-flex flex-col justify-start items-center gap-2.5">
      <div className="pt-16 border-t-2 border-black/20 flex flex-col justify-start items-center gap-16">
        <div className="inline-flex justify-start items-start gap-48">
          <div className="inline-flex flex-col justify-start items-start gap-14">
            <div className="flex flex-col justify-start items-start gap-10">
              <div className="w-96 justify-start text-zinc-800 text-3xl font-semibold font-ubuntu leading-10">Let's connect</div>
              <div className="w-96 justify-start text-zinc-800 text-base font-normal font-ubuntu leading-relaxed">Feel free to reach out to me through any of the platforms below. I'm open to discussing new opportunities, collaborations, or just having a chat!</div>
            </div>

            {/* LinkedIn Link */}
            <Link to="https://www.linkedin.com/in/kevin1nguyen" target="_blank" rel="noopener noreferrer">
              <div className="flex items-align-center gap-3">
                <div className="w-9 h-9 relative overflow-hidden">
                    <img src={linkedin} alt="LinkedIn" className="w-7 h-7 filter brightness-0" />
                </div>
                <p className="text-zinc-800 text-base font-normal font-ubuntu">linkedin.com/kevin1nguyen</p>
              </div>
            </Link>

            {/* GitHub Link */}
            <Link to="https://www.github.com/kvn147" target="_blank" rel="noopener noreferrer">
              <div className="flex items-align-center gap-3">
                <div className="w-9 h-9 relative overflow-hidden">
                    <img src={github} alt="GitHub" className="w-7 h-7 filter brightness-0" />
                </div>
                <p className="text-zinc-800 text-base font-normal font-ubuntu">github.com/kvn147</p>
              </div>
            </Link>

            {/* Email Link */}
            <Link to="mailto:kevnguyen49@gmail.com" target="_blank" rel="noopener noreferrer">
              <div className="flex items-align-center gap-3">
                <div className="w-9 h-9 relative overflow-hidden">
                  <img src={mail} alt="Mail" className="w-7 h-7 filter brightness-0" />
                </div>
              <p className="text-zinc-800 text-base font-normal font-ubuntu">kevnguyen49 [at] gmail [dot] com</p>
              </div>
            </Link>
          </div>

          {/* Contact Form */}
          <div className="inline-flex flex-col justify-start items-start gap-10">
            <form onSubmit={handleSubmit} className="flex flex-col justify-start items-start gap-5 w-full">
              <div className="w-[530px] px-7 py-5 bg-zinc-100 inline-flex justify-start items-start gap-2.5">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name" 
                  className="flex-1 bg-transparent outline-none text-zinc-800 text-base font-normal font-ubuntu leading-relaxed" 
                  required
                />
              </div>
              <div className="w-[530px] px-7 py-5 bg-zinc-100 inline-flex justify-start items-start gap-2.5">
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email" 
                  className="flex-1 bg-transparent outline-none text-zinc-800 text-base font-normal font-ubuntu leading-relaxed" 
                  required
                />
              </div>
              <div className="w-[530px] px-7 py-5 bg-zinc-100 inline-flex justify-start items-start gap-2.5">
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here" 
                  className="flex-1 bg-transparent outline-none text-zinc-800 text-base font-normal font-ubuntu leading-relaxed h-40 resize-none"
                  required
                ></textarea>
              </div>
              
              {/* Status Messages */}
              {status.error && (
                <div className="w-full text-red-500 text-base font-ubuntu">{status.error}</div>
              )}
              
              {status.success && (
                <div className="w-full text-green-500 text-base font-ubuntu">Message sent successfully!</div>
              )}

              <button 
                type="submit" 
                className={`px-10 py-2 ${status.submitting ? 'bg-zinc-500' : 'bg-zinc-800'} inline-flex justify-start items-start gap-2.5`}
                disabled={status.submitting}
              >
                <div className="text-center justify-center text-white text-xl font-semibold font-ubuntu leading-loose">
                  {status.submitting ? 'Sending...' : 'Submit'}
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );    
}

export default Contacts;