import contactBg from "../../assets/contact/banner.jpg";
import Cover from "../Shared/Cover";
import Form from "./Form";
import Location from "./Location";
const Contact = () => {
  return (
    <div>
      <Cover img={contactBg} title={"CONTACT US"} />
      <Location />
      <Form />
    </div>
  );
};

export default Contact;
