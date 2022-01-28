import { SearchIcon } from "@heroicons/react/solid";

export default function SearchInput() {
  return (
    <div className="flex items-center text-xs relative">
      <SearchIcon className="text-gray-300 h-5 w-5 absolute" />
      <input
        className="placeholder:text-gray-500 border-b border-gray-300  pl-6  bg-transparent p-1"
        placeholder="Search..."
      />
    </div>
  );
}
