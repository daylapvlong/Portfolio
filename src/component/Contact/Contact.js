import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../Header';

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5azsjbp', 'template_4vb5gt9', form.current, '7XCtia89rnu3dVQJR')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }

  return (
    <div className="">
      <Header />
      <h1 className="text-9xl font-semibold">Contact.</h1>
      <h2 className="text-xl">Reach Out to me by form or directly on <a href="mailto:phmvtlong@gmail.com">phmvtlong@gmail.com</a></h2>
      <form className='w-full max-w-lg left-3' ref={form} onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Your Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 
                        border rounded py-3 px-4 mb-3 
                        leading-tight focus:outline-none focus:bg-white" id="grid-first-name" 
              type="text"
              placeholder='Name'
              name="user_name"
              required
            />
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border
                       border-gray-200 rounded py-3 px-4 leading-tight 
                       focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name"
              type="text"
              placeholder='Email'
              name="user_email"
              required
            />
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Messsage
            </label>
            <textarea
              class="appearance-none block w-full bg-gray-200 text-gray-700 
                    border border-gray-200 rounded py-3 px-4 mb-3 leading-tight 
                    focus:outline-none focus:bg-white focus:border-gray-500" id="grid-message"
              placeholder='Message'
              name="message"
              required
            />
            <button className="bg-transparent hover:bg-green-500 text-green-700
                          font-semibold hover:text-white py-2 px-4 
                          border border-green-500 hover:border-transparent rounded"
              type="submit">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;