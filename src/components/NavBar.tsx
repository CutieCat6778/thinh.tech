export default function Navbar() {
  return (
    <ul className="flex justify-right items-center text-xl p-4 c-bg-black c-text-white bg-opacity-90 fixed top-0 left-0 right-0">
      <li className="mr-auto">
        <a>thinh.tech</a>
      </li>
      <li className="mr-6">
        <a>Home</a>
      </li>
      <li className="mr-6">
        <a>About</a>
      </li>
      <li className="mr-0">
        <a>Contact</a>
      </li>
    </ul>
  );
}
