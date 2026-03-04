import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

function navLinkClass({ isActive }) {
  return `navbar-link ${isActive ? "navbar-link-active" : ""}`.trim();
}

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/login") return null;

  async function handleLogout() {
    await logout();
    navigate("/login");
  }

  const isAdmin = user?.uloga === "ADMIN";

  return (
     <div className="navbar">
      <NavLink to="/" end className={navLinkClass}>
        Početna
      </NavLink>

      {user && (
        <>
          <NavLink to="/predmeti" className={navLinkClass}>
            {isAdmin ? "Predmeti" : "Moji predmeti"}
          </NavLink>

          <NavLink to="/zadaci" className={navLinkClass}>
            {isAdmin ? "Zadaci" : "Moji zadaci"}
          </NavLink>

          <NavLink to="/predaje" className={navLinkClass}>
            {isAdmin ? "Predaje" : "Moje predaje"}
          </NavLink>

          <div className="navbar-user">
            <span className="navbar-user-label">
              {user.ime} ({user.uloga})
            </span>

            <button onClick={handleLogout}>Logout</button>
          </div>
        </>
      )}
    </div>
  );
}
