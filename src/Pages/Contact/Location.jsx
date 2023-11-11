import { FaClock, FaLocationArrow, FaPhone } from "react-icons/fa";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const Location = () => {
  return (
    <div className="my-20 px-5">
      <SectionTitle heading={"OUR LOCATION"} subHeading={"Visit Us"} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:w-full mx-auto">
        <div className="text-center bg-[#F3F3F3]">
          <div className="bg-yellow-600 w-full py-3">
            <FaPhone className="text-white text-2xl mx-auto" />
          </div>
          <h2 className="text-2xl font-medium my-5">PHONE</h2>
          <p className="mb-10">+38 (012) 34 56 789</p>
        </div>
        <div className="text-center bg-[#F3F3F3]">
          <div className="bg-yellow-600 w-full py-3">
            <FaLocationArrow className="text-white text-2xl mx-auto" />
          </div>
          <h2 className="text-2xl font-medium my-5">ADDRESS</h2>
          <p className="mb-10">+38 (012) 34 56 789</p>
        </div>
        <div className="text-center bg-[#F3F3F3]">
          <div className="bg-yellow-600 w-full py-3">
            <FaClock className="text-white text-2xl mx-auto" />
          </div>
          <h2 className="text-2xl font-medium my-5">ADDRESS</h2>
          <p className="mb-10">
            Mon - Fri: 08:00 - 22:00 <br />
            Sat - Sun: 10:00 - 23:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;
