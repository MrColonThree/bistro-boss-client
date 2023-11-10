import chef from "../../../assets/home/chef-service.jpg";
const ChefService = () => {
  return (
    <div className="relative h-60 md:h-full">
      <img className="w-full h-full object-cover" src={chef} alt="" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-3/4 h-3/4 flex flex-col justify-center items-center p-5">
        <h1 className="md:text-3xl lg:text-5xl uppercase cinzel text-center md:mb-5">Bistro Boss</h1>
        <p className="text-center max-w-3xl text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default ChefService;
