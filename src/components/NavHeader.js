export default NavHeader = () => {
  return (
    <nav className="bg-white px-8 h-[72px] flex items-baseline border-b border-gray-300">
      <span className="py-[20px]"></span>
      <span className="font-extrabold text-2xl text-gray-900 shrink-0">
        Josh Shoe Shop
      </span>
      <span className="flex-1"></span>
      <div className="semi-bold grow shrink-0 text-lg flex justify-center gap-10 px-5">
        <a href="#sale" className="text-indigo-700">
          SALE
        </a>
        <a href="#">NEW RELEASE</a>
        <a href="#">MEN</a>
        <a href="#">WOMAN</a>
        <a href="#">KIDS</a>
        <a href="#">COLLECTIONS</a>
      </div>
      <span className="flex-1"></span>
    </nav>
  );
};
