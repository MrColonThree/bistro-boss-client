import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleSignIn().then((res) => {
      const user = res.user;
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User logged in successfully.",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
      const userInfo = {
        email: user.email,
        name: user.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User logged in successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      });
    });
  };
  return (
    <div className="py-5">
      <div className="divider">
        <button onClick={handleGoogleSignIn} className="btn">
          <FaGoogle />
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
