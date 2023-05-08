import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  HashRouter,
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
  const isGitHubPages = process.env.PUBLIC_URL !== "";
  const Router = isGitHubPages ? HashRouter : BrowserRouter;

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
            {isGitHubPages && (
              <Route path="*" element={<Navigate to="/" replace />} />
            )}
            {!isGitHubPages && <Route path="*" element={<Error />} />}
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
