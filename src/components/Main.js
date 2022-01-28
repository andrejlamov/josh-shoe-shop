import Breadcrumbs from "./Breadcrumbs";
import ShoeGrid from "./ShoeGrid";
import Select from "./Select";
import Sidebar from "./Sidebar";

export default function Main() {
  return (
    <div className="flex flex-col px-8 pt-14 gap-4">
      <header className="flex items-baseline">
        <div className="min-w-[190px]">
          <Breadcrumbs separator="/">
            <span>Home</span>
            <span>Sale</span>
            <span>Shoes</span>
          </Breadcrumbs>
        </div>
        <span className="mr-auto text-2xl">Running</span>
        <div>
          <Select label="Sort">
            <option>Newest Release</option>
            <option>Price</option>
          </Select>
        </div>
      </header>
      <div className="flex flex-row-reverse justify-end">
        <div className="flex-1 pt-8">
          <ShoeGrid />
        </div>
        <div className="pt-8">
          <aside className="min-w-[190px]">
            <Sidebar>
              <a>Lifestyle</a>
              <a className="text-pink-500">Running</a>
              <a>Basketbal</a>
            </Sidebar>
          </aside>
        </div>
      </div>
    </div>
  );
}
