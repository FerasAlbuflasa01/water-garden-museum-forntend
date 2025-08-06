import { Link, NavLink } from 'react-router-dom'

const Header = ({ admin, handleLogOut }) => {
  return (
    <header>
      {admin ? (
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/games/new">Add Item</NavLink>
          <Link onClick={handleLogOut} to="/">
            Sign Out
          </Link>
        </nav>
      ) : (
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      )}
    </header>
  )
}
export default Header
