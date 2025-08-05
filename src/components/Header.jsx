import { NavLink } from "react-router-dom"

const Header = () => {
    return (

        <header>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/new/games">Add Item</NavLink>
    <NavLink to="/about">About</NavLink>
    </header>
    )
}
export default Header