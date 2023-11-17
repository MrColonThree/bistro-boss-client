import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UpdateItem = () => {
  const { name, price, recipe, category, _id } = useLoaderData();
  console.log(name);
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const menuItem = {
      name: data.name,
      category: data.category,
      price: parseFloat(data.price),
      recipe: data.recipe,
    };
    const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
    console.log(menuRes.data);
    if (menuRes.data.modifiedCount > 0) {
      // show success popup
      // reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${data.name} is updated to the menu.`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div>
      <SectionTitle heading={"Update Item"} subHeading={"Update item info"} />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Recipe name*</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Recipe name"
              className="input input-bordered w-full"
              {...register("name", { required: true })}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="form-control w-full my-6">
              <label className="label">Category*</label>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option>salad</option>
                <option>pizza</option>
                <option>soup</option>
                <option>dessert</option>
                <option>drinks</option>
              </select>
            </div>
            <div className="form-control my-6 w-full">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                name="price"
                defaultValue={price}
                placeholder="price"
                className="input input-bordered w-full"
                {...register("price", { required: true })}
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your bio</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              name="recipe"
              defaultValue={recipe}
              placeholder="Recipe"
              {...register("recipe", { required: true })}
            ></textarea>
          </div>
          <button className="btn ">Update Menu Item</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
