import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensilSpoon } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?expiration=600&key=${image_hosting_key}`;
const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    //  image upload to imgbb and then get an  url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the data as image url
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
      if (menuRes.data.insertedId) {
        reset();
        Swal.fire("Success!", "Item added successfully", "success");
      }
    }
    console.log(res.data);
  };
  return (
    <div>
      <SectionTitle heading={"ADD AN ITEM"} subHeading={"What's new?"} />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Recipe name*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Recipe name"
              className="input input-bordered w-full"
              {...register("name", { required: true })}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="form-control w-full my-6">
              <label className="label">Category*</label>
              <select
                defaultValue="default"
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
              placeholder="Recipe"
              {...register("recipe", { required: true })}
            ></textarea>
          </div>
          <div className="form-control w-full my-6">
            <input
              type="file"
              className="file-input w-full max-w-xs"
              name="image"
              {...register("image", { required: true })}
            />
          </div>
          <button className="btn ">
            Add Item <FaUtensilSpoon className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
