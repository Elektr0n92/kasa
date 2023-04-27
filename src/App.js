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
import "./styles/style.css";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Header />
        <div className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/error" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/error" element={<Error />} />
            <Route path="/products/:productId" element={<div>blabla</div>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
