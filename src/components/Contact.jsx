import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full bg-[#0A1929] flex justify-center p-4">
      <form
        method="POST"
        action="https://getform.io/f/83130f89-f223-4e2f-ab39-c4f214190161"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#EE550E] text-gray-300">
            Contact Me
          </p>
          <p className="text-gray-400 py-4">
            You can also contact me directly via e-mail :
            alex.ticau2102@gmail.com
          </p>
        </div>
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Your Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Your Email"
          name="email"
        />
        <textarea
          className="my-4 p-2 bg-[#ccd6f6]"
          placeholder="Enter your message here"
          name="message"
          rows="10"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#EE550E] hover:border-[#EE550E] px-6 py-4 my-8 mx-auto flex items-center ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
