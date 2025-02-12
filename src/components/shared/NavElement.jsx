function NavElement({ href, title }) {
  return (
    <li className="flex py-1 px-1 lg:px-2 bg-dark-text bg-opacity-0 rounded-md hover:bg-opacity-10">
      <a
        className="text-xl w-full"
        href={href}
        onClick={() => {
          document.getElementById("nav-list").classList.toggle("hidden");
        }}
      >
        {title}
      </a>
    </li>
  );
}

export default NavElement;
