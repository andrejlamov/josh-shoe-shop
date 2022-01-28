import Card from "./Card";
import { SHOES } from "../data";

export default function ShoeGrid() {
  return (
    <div className="flex gap-5 flex-wrap ">
      {SHOES.map((d, i) => {
        return <Card key={i} {...d} />;
      })}
    </div>
  );
}
