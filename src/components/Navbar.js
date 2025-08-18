// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Content", path: "/content" },
    { name: "Apply", path: "/apply" }
  ];

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      {/* Logo / Brand */}
      <Link to="/" className="text-2xl font-bold text-green-600">
        Access to Finance
      </Link>

      {/* Links */}
      <ul className="flex gap-8 text-gray-700">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`${
                location.pathname === link.path
                  ? "text-green-600 font-bold underline"
                  : "hover:text-green-600"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
