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
    <>
      <Router>
        <Header />
        <div className="page-container">
          <Routes>
            <Route path="*" element={<Navigate to="/error" replace />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/error" element={<Error />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
