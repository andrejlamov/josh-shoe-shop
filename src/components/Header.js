import SuperHeader from "./SuperHeader";
import NavHeader from "./NavHeader";

export default function Header() {
  return (
    <header className="flex flex-col">
      <SuperHeader />
      <NavHeader />
    </header>
  );
}
