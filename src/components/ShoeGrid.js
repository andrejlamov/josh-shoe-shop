import Card from "./Card";
import { SHOES } from "../data";

export default ShoeGrid = () => {
  return (
    <div className="flex gap-5 flex-wrap ">
      {SHOES.map((d) => {
        return <Card {...d} />;
      })}
    </div>
  );
};
