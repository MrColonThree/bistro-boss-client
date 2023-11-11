import { useState } from "react";
import shopCover from "../../assets/shop/banner2.jpg";
import Cover from "../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/useMenu";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import OrderTab from "./OrderTab/OrderTab";
const Shop = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category || "salad");
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  const [activeIndex, setActiveIndex] = useState(tabIndex);
  return (
    <div className="">
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover img={shopCover} title={"OUR SHOP"} />
      <Tabs
        className="text-center my-20 px-5"
        defaultIndex={tabIndex}
        onSelect={(index) => {
          setTabIndex(index);
          setActiveIndex(index);
        }}
      >
        <TabList className="flex justify-center items-center gap-5">
          {categories.map((category, index) => (
            <Tab key={index} className="border-none">
              <button
                className={`uppercase font-bold text-lg  pb-1 border-b-4 border-transparent hover:border-yellow-600 hover:text-yellow-600 ${
                  activeIndex === index
                    ? "border-yellow-600 text-yellow-600"
                    : ""
                }`}
              >
                {category}
              </button>
            </Tab>
          ))}
        </TabList>
        <TabPanel>
          <OrderTab items={salad} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Shop;
