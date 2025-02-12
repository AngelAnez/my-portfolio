import { Menu } from "lucide-react";

function MenuButton() {
  return (
    <button
      aria-label="Menu"
      className="lg:hidden py-1 px-2 rounded-md"
      onClick={() => {
        document.getElementById("nav-list").classList.toggle("hidden");
      }}
    >
      <Menu className="w-5 h-5 md:w-7 md:h-7" />
    </button>
  );
}

export default MenuButton;
