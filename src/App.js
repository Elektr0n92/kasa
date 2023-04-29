import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import { About } from "./pages/About";
import Header from "./components/Header";
import Error from "./pages/Error/Error";
import Footer from "./components/Footer";
import Product from "./pages/Product/Product";
import ScrollToTop from "./components/ScrollToTop";
import "./styles/style.css";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <ScrollToTop />
        <Header />
        <div className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/404" element={<Error />} />
            <Route path="/products/:productId" element={<Product />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
