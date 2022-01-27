export default Card = ({ imageSrc, name, price, numOfColors }) => {
  return (
    <div className="flex-1 min-w-[192px]">
      <div className="flex flex-col">
        <img src={imageSrc} className="pb-2"></img>
        <span className="font-semibold">{name}</span>
        <span>{price}$</span>
        <span className="text-gray-400 ">
          {numOfColors} {numOfColors < 2 ? "Color" : "Colors"}
        </span>
      </div>
    </div>
  );
};
