import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Search from "./pages/Search";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="overflow-hidden">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/offer" element={<Offers />} />
                <Route path="/help" element={<Help />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
    );
}

export default App;
