function MenuButton() {
  return (
    <button
      aria-label="Menu"
      className="lg:hidden py-1 px-2 rounded-md"
      onClick={() => {
        document.getElementById("nav-list").classList.toggle("hidden");
      }}
    >
      Menu
    </button>
  );
}

export default MenuButton;
