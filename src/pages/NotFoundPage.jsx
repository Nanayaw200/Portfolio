import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

function NotFoundPage() {
  return (
    <MainLayout>
      <section className="page-placeholder">
        <div className="container">
          <span className="eyebrow">404</span>
          <h1 className="page-title">Page Not Found</h1>
          <p className="page-description">
            The page you are looking for does not exist.
          </p>
          <Link to="/" className="primary-btn">
            Go Back Home
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}

export default NotFoundPage;