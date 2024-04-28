const Button = ({ buttonText }) => {
  return (
    <div className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-custom-jute  text-white bg-custom-jute">
      <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-10 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
      <span className="relative font-bold text-white transition duration-300 group-hover:text-custom-jute  ease">
        {buttonText}
      </span>
    </div>
  );
};

export default Button;
