const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center">
      <p className="text-[#D99904] text-xl italic my-4">---{subHeading}---</p>
      <button
        className="text-4xl px-16 py-5 border-y border-y-[#E8E8E8] mb-10 uppercase"
        disabled
      >
        {heading}
      </button>
    </div>
  );
};

export default SectionTitle;
