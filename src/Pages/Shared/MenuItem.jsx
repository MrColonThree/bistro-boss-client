const MenuItem = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="flex gap-4">
      <img className="w-[120px] h-[100px] rounded-b-[200px] rounded-r-[200px]" src={image} alt="" />
      <div>
        <h3 className="uppercase">{name}----------------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
