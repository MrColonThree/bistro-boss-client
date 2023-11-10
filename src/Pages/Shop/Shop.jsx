import shopCover from "../../assets/shop/banner2.jpg";
import Cover from "../Shared/Cover";
const Shop = () => {
  return (
    <div>
      <Cover img={shopCover} title={"OUR SHOP"} />
      <div className="tabs">
        <a className="tab tab-lifted">Tab 1</a>
        <a className="tab tab-lifted tab-active">Tab 2</a>
        <a className="tab tab-lifted">Tab 3</a>
      </div>
    </div>
  );
};

export default Shop;
