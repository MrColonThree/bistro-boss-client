import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, recipe, price, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        menuItemId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showCancelButton: false,
            timer: 1500,
          });
          // refetch the cart to update the cart items count
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not Signed In",
        text: "Please sign in to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, sign in!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signIn", { state: { from: location } });
        }
      });
    }
  };
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
          <button
            onClick={handleAddToCart}
            className="btn btn-outline border-0 border-b text-[#BB8506] border-b-[#BB8506] hover:text-[#BB8506]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
