import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../Header';
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineEnvironment
} from "react-icons/ai";

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
    <div className="pl-20 bg-white dark:bg-gray-800 text-black dark:text-white h-full">
      <Header />
      <div class="px-20">
        <h1 className="text-6xl font-semibold pb-3 text-center">
          Contact Me
        </h1>

        <ul class="pt-10 grid grid-cols-3 gap-5 ">
          <li class="bg-white rounded-lg shadow-xl">
            <div class="h-52">
              <div class="contact-icon">
                < AiOutlineEnvironment size={36} />
              </div>
              <div class="text-center text-gray-800 dark:text-black px-5">
                <h3 class="font-bold text-lg">My Address</h3>
                <p>Dolphin Plaza, 6 Nguyen Hoang Street, Nam Tu Liem, Hanoi</p>
              </div>
            </div>
          </li>
          <li class="bg-white rounded-lg shadow-xl">
            <div class="h-52">
              <div class="contact-icon">
                < AiOutlineMail size={36} />
              </div>
              <div class="text-center text-gray-800 dark:text-black px-5">
                <h3 class="font-bold text-lg">Email</h3>
                <p>phmvtlong@gmail.com</p>
              </div>
            </div>
          </li>
          <li class="bg-white rounded-lg shadow-xl">
            <div class="h-52">
              <div class="contact-icon">
                < AiOutlinePhone size={36} />
              </div>
              <div class="text-center text-gray-800 dark:text-black px-5">
                <h3 class="font-bold text-lg">Call Me</h3>
                <p>0368353613</p>
              </div>
            </div>
          </li>
        </ul>

        <ul class="py-10 grid grid-cols-2 gap-5">
          <li class="bg-white rounded-lg shadow-xl">
            <div class="h-80"></div>
          </li>
          <li class="bg-white rounded-lg shadow-xl">
            <form className='w-full max-w-lg px-5' ref={form} onSubmit={handleSubmit}>
              <div className="flex flex-wrap mx-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2" for="grid-first-name">
                  Your Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 
                          border border-gray-500 rounded py-3 px-4 mb-1 
                          leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
                  type="text"
                  placeholder='Name'
                  name="user_name"
                  required
                />
                <label className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2" for="grid-last-name">
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border
                        border-gray-500 rounded py-3 px-4 leading-tight 
                        focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name"
                  type="text"
                  placeholder='Email'
                  name="user_email"
                  required
                />
                <label class="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold my-2" for="grid-password">
                  Messsage
                </label>
                <textarea
                  class="appearance-none block w-full bg-gray-200 text-gray-700 
                      border border-gray-500 rounded pt-3 pb-20 px-4 mb-3 leading-tight 
                      focus:outline-none focus:bg-white focus:border-gray-500" id="grid-message"
                  placeholder='Message'
                  name="message"
                  required
                />
                <button className="bg-transparent hover:bg-green-500 text-green-500
                            font-bold font hover:text-white py-3 px-7 mt-3 tracking-wide
                            border border-green-500 hover:border-transparent rounded"
                  type="submit">
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;