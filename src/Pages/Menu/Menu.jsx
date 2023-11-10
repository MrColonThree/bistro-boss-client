import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import menuBg from "../../assets/menu/banner3.jpg";
import dessertBg from "../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../assets/menu/pizza-bg.jpg";
import saladBg from "../../assets/menu/salad-bg.jpg";
import soupBg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuBg} title={"OUR MENU"} />
      {/* Main civer */}
      <SectionTitle subHeading={"Don't miss"} heading={"Today's offer"} />
      {/* offered menu items */}
      <MenuCategory items={offered} />
      {/* dessert menu items */}
      <MenuCategory items={dessert} title={"Dessert"} coverBg={dessertBg} />
      {/* Pizza menu items */}
      <MenuCategory items={pizza} title={"Pizza"} coverBg={pizzaBg} />
      {/* Salad menu items */}
      <MenuCategory items={salad} title={"Salads"} coverBg={saladBg} />
      {/* Soup menu items */}
      <MenuCategory items={soup} title={"Soups"} coverBg={soupBg} />
    </div>
  );
};

export default Menu;
