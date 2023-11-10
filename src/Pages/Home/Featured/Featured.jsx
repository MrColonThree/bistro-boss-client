import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed pt-8 my-20">
      <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"} />
      <div className="md:flex justify-center items-center gap-10 pb-20 md:px-36 text-white relative">
        <div className="">
          <img src={featured} alt="" />
        </div>
        <div className="text-content">
          <p>Aug 10, 2029</p>
          <p className="uppercase">Where can I get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            molestiae vero, sapiente veniam quae eius consectetur, mollitia
            cumque deserunt accusantium quidem voluptates tenetur animi! Dolorum
            magni labore dolor assumenda dolores?
          </p>
          <button
            className="btn btn-outline border-0 border-b-4"
          >
            Order now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
