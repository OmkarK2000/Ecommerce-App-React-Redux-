import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Shop from "./pages/Shop"
import Checkout from "./pages/Checkout"
import Cart from "./pages/Cart"
import Search from "./pages/Search"
import LikePage from "./pages/LikePage"
import Footer from "./components/Footer"

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/likePage" element={<LikePage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App