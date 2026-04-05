import Navbar from "../components/layouts/NavBar";
import Footer from "../components/layouts/Footer";

function MainLayout({ children }) {
  return (
    <div className="site-shell">
      <Navbar />
      <main className="page-content">{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;