import React from 'react';
import linkedin from "../assets/linkedin-icon.svg";
import github from "../assets/github-icon.svg";
import mail from "../assets/mail-icon.svg";
import { Link } from 'react-router-dom';

function Contacts() {
  return (
    <div data-property="Desktop" className="self-stretch px-24 pb-16 bg-white inline-flex flex-col justify-start items-center gap-2.5">
      <div className="pt-16 border-t-2 border-black/20 flex flex-col justify-start items-center gap-16">
        <div className="inline-flex justify-start items-start gap-48">
          <div className="inline-flex flex-col justify-start items-start gap-14">
            <div className="flex flex-col justify-start items-start gap-10">
              <div className="w-96 justify-start text-zinc-800 text-3xl font-semibold font-ubuntu leading-10">Let's connect</div>
              <div className="w-96 justify-start text-zinc-800 text-base font-normal font-ubuntu leading-relaxed">Feel free to reach out to me through any of the platforms below. I'm always open to discussing new opportunities, collaborations, or just having a chat.</div>
            </div>

            {/* LinkedIn Link */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 relative overflow-hidden">
                <Link to="https://www.linkedin.com/in/kevin1nguyen" target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="LinkedIn" className="w-7 h-7 filter brightness-0" />
                </Link>
              </div>
              <p className="text-zinc-800 text-base font-normal font-ubuntu">linkedin.com/kevin1nguyen</p>
            </div>

            {/* GitHub Link */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 relative overflow-hidden">
                <Link to="https://www.github.com/kvn147" target="_blank" rel="noopener noreferrer">
                  <img src={github} alt="GitHub" className="w-7 h-7 filter brightness-0" />
                </Link>
              </div>
              <p className="text-zinc-800 text-base font-normal font-ubuntu">github.com/kvn147</p>
            </div>

            {/* Email Link */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 relative overflow-hidden">
                <Link to="mailto:kevinn24@uw.edu" target="_blank" rel="noopener noreferrer">
                  <img src={mail} alt="Mail" className="w-7 h-7 filter brightness-0" />
                </Link>
              </div>
              <p className="text-zinc-800 text-base font-normal font-ubuntu">kevnguyen49@gmail.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="inline-flex flex-col justify-start items-start gap-10">
            <div className="flex flex-col justify-start items-start gap-5">
              <div className="w-[530px] px-7 py-5 bg-zinc-100 inline-flex justify-start items-start gap-2.5">
                <input type="text" placeholder="Name" className="flex-1 bg-transparent outline-none text-zinc-800 text-base font-normal font-ubuntu leading-relaxed" />
              </div>
              <div className="w-[530px] px-7 py-5 bg-zinc-100 inline-flex justify-start items-start gap-2.5">
                <input type="email" placeholder="Email" className="flex-1 bg-transparent outline-none text-zinc-800 text-base font-normal font-ubuntu leading-relaxed" />
              </div>
              <div className="w-[530px] px-7 py-5 bg-zinc-100 inline-flex justify-start items-start gap-2.5">
                <textarea placeholder="Type your message here" className="flex-1 bg-transparent outline-none text-zinc-800 text-base font-normal font-ubuntu leading-relaxed h-40 resize-none"></textarea>
              </div>
            </div>
            <button className="px-10 py-2 bg-zinc-800 inline-flex justify-start items-start gap-2.5">
              <div className="text-center justify-center text-white text-xl font-semibold font-ubuntu leading-loose">Submit</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );    
}

export default Contacts;