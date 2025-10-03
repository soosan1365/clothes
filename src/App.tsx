
import { Routes, Route } from "react-router-dom";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import PlaceOrders from "./pages/PlaceOrders";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="px-5  sm:px-[5vw]  md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/place-Orders" element={<PlaceOrders />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
