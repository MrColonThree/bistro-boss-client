import Cover from "../../Shared/Cover";
import MenuItem from "../../Shared/MenuItem";

const MenuCategory = ({ items, title, coverBg }) => {
  return (
    <div>
      {title && <Cover img={coverBg} title={title} />}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item, idx) => (
          <MenuItem key={idx} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
