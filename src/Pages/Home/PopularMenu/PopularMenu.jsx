import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  return (
    <section className="my-20">
      <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"} />
      <div className="grid md:grid-cols-2 gap-10">
        {menu.map((item, idx) => (
          <MenuItem key={idx} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
