import Footer from "../components/partials/Footer";
import Header from "../components/partials/Header";

const defaultLayout = ({ children }) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export default defaultLayout;
