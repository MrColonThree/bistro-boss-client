import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const { user } = useAuth();
  const userEmail = user?.email;
  const axiosSecure = useAxiosSecure();
  // tanStack query
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", userEmail],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${userEmail}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
