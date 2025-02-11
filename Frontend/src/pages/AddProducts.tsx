import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import AddProduct from "../components/AddProduct/AddProduct";

const AddProducts = () => {
  return (
    <div className="d-flex min-vh-100 flex-column">
      <Header />
      <Navbar />
      <Breadcrumb />
      <AddProduct />
      <Footer />
    </div>
  );
};

export default AddProducts;
