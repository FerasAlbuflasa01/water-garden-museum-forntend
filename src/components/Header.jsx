import { Link, NavLink } from 'react-router-dom'

const Header = ({ admin, handleLogOut }) => {
  let display
  console.log(admin)

  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/new/games">Add Item</NavLink>
      <NavLink to="/about">About</NavLink>
      {admin ? (
        <Link onClick={handleLogOut} to="/">
          Sign Out
        </Link>
      ) : null}
    </header>
  )
}
export default Header
