import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover";
import MenuItem from "../../Shared/MenuItem";

const MenuCategory = ({ items, title, coverBg }) => {
  return (
    <div className="mb-16">
      {title && <Cover img={coverBg} title={title} />}
      <div className="grid md:grid-cols-2 gap-10 mt-16">
        {items.map((item, idx) => (
          <MenuItem key={idx} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to={`/shop/${title ? title : ''}`}>
          <button className="btn btn-outline border-0 border-b-4">
            Order now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
