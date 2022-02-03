import Header from "./components/header/Header"
import MobileMenu from "./components/header/MobileMenu"
import './styles/general.css'
import { useState } from "react"
import Cart from "./components/header/Cart"

const App = () => {

  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const toggleCart = () => setCartOpen(!cartOpen);

  return (
    <div>
      <Header open={open} toggleMenu={toggleMenu} toggleCart={toggleCart} />
      <MobileMenu open={open} />
      <Cart cartOpen={cartOpen} />
    </div>
  )
}

export default App
