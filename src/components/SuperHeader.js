import { ShoppingBagIcon } from "@heroicons/react/solid";
import SearchInput from "./SearchInput";

export default function SuperHeader() {
  return (
    <div className="flex h-11 flex-row bg-gray-900 text-gray-300 text-sm  items-center px-8">
      <span>Free shipping on domestic orders over $75!</span>
      <span className="mr-auto"></span>
      <div className="flex gap-5 items-center">
        <SearchInput />
        <a href="#">Help</a>
        <button>
          <ShoppingBagIcon className="h-5 w-5 text-gray-300" />
        </button>
      </div>
    </div>
  );
}
