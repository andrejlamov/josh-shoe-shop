export default function Select({ label, children }) {
  return (
    <div>
      <label className="pr-2 text-gray-500">{label}</label>
      <div className="inline py-3 px-2 bg-gray-100 rounded-md">
        <select className="bg-gray-100 min-w-fit">{children}</select>
      </div>
    </div>
  );
}
