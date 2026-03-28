import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main
        style={{
          minHeight: "60vh",
          display: "grid",
          placeItems: "center",
          textAlign: "center",
          padding: "24px",
        }}
      >
        <div>
          <h1 style={{ fontSize: "3rem", marginBottom: "12px" }}>404</h1>
          <p style={{ marginBottom: "20px" }}>
            Sorry, the page you are looking for does not exist.
          </p>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              backgroundColor: "#2563eb",
              color: "white",
              padding: "10px 16px",
              borderRadius: "8px",
            }}
          >
            Go back Home
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}