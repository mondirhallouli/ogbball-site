import './styles/general.css'
import { useState } from "react"
import Header from "./components/header/Header"
import MobileMenu from "./components/header/MobileMenu"
import Cart from "./components/header/Cart"
import Shop from "./components/shop/Shop"
import Coaching from "./components/coaching/Coaching"
import Youtube from './components/youtube/Youtube'

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
      <Shop />
      <Coaching />
      <Youtube />
    </div>
  )
}

export default App
