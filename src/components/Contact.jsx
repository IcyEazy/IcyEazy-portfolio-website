import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        action="https://getform.io/f/d913fb10-5fa4-470f-afe5-a1136a231d81"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-2 border-teal-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or drop me an email -{" "}
            <a
              className="text-teal-300 font-bold"
              href="mailto:israelcollins1409@gmail.com"
            >
              israelcollins1409@gmail.com
            </a>
          </p>
        </div>
        <input
          className="p-2 bg-[#ccd6f6] brRad focus:outline-none"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] brRad focus:outline-none"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 brRad focus:outline-none"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-teal-600 hover:border-teal-600 hover:scale-95 px-4 py-3 my-8 mx-auto flex items-center brRad">
          I Want To Hire Israel! &#128516;
        </button>
      </form>
    </div>
  );
};

export default Contact;
