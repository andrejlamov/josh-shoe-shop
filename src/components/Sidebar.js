export default function Sidebar({ children }) {
  return (
    <div className="flex flex-col gap-2 text-base text-gray-700">
      {children}
    </div>
  );
}
