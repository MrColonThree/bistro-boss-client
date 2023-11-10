const FoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="card bg-[#F3F3F3] rounded-none shadow-xl">
      <figure>
        <img src={image} alt="Food" />
      </figure>
      <p className="bg-slate-900 bg-opacity-80 text-white absolute right-0 mr-5 mt-5 px-4 py-1">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="text-center font-semibold text-2xl">{name}</h2>
        <p className="text-[#737373] text-left">{recipe}</p>
        <div className="text-center">
          <button className="btn btn-outline border-0 border-b text-[#BB8506] border-b-[#BB8506] hover:text-[#BB8506]">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
