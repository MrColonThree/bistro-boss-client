import { useRef } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { FaLocationArrow } from "react-icons/fa";

const Form = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);
  const checkboxRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const message = messageRef.current.value;
    const isRobot = checkboxRef.current.checked;



  };
  return (
    <div className="mb-20 px-5">
      <SectionTitle heading={"CONTACT FORM"} subHeading={"Send Us a Message"} />
      <div className="mx-auto mt-10 p-6 bg-white rounded-md shadow-md max-w-5xl">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="mb-4 w-full">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                ref={nameRef}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4 w-full">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                ref={emailRef}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-600"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              ref={phoneRef}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              ref={messageRef}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              rows="5"
              placeholder="Write your message here"
              required
            ></textarea>
          </div>
          <div className="mb-10">
            <input
              type="checkbox"
              id="robot"
              ref={checkboxRef}
              className="mr-2"
              required
            />
            <label htmlFor="robot" className="text-sm text-gray-600">
              I am not a robot
            </label>
          </div>
          <div className="mb-10">
            <button
              type="submit"
              className="bg-yellow-700 text-white py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring focus:border-yellow-300 font-medium flex items-center gap-2 mx-auto"
            >
              Send Message
              <FaLocationArrow />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
