import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/navbar';
import Stats from './components/stats';
import ProductTable from './components/productTable';
import axios from 'axios';
import EditProductModal from './components/editProduct';

function App() {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await axios.get("https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory");
    const productsWithIsDisabled = response.data.map((product) => ({
      ...product,
      isDisabled: false,
    }));
    setProducts(productsWithIsDisabled);
  };
  const handleModeChange = () => setIsAdminMode(!isAdminMode);
  const handleShowModal = () => setShowModal(!showModal);
  const handleEdit = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleDelete = (name) => {
    setProducts(products.filter((product) => product.name !== name));
  };

  const handleDisable = (name, isDisabled) => {
    setProducts(
      products.map((product) =>
        product.name === name ? { ...product, isDisabled: !isDisabled } : product
      )
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedProduct({ ...selectedProduct, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setProducts(
      products.map((product) =>
        product.name === selectedProduct.name ? selectedProduct : product
      )
    );
    setShowModal(false);
  };

  const totalProducts = products.length;
  const totalValue = products.reduce((acc, product) => {
    const numericValue = parseInt(product.value.replace('$', ''));
    return acc + numericValue;
  }, 0);
  const outOfStock = products.filter((product) => product.quantity === 0).length;
  const totalCategories = new Set(products.map((product) => product.category)).size;

  return (
    <div className='main'>
      <NavigationBar isAdminMode={isAdminMode} handleModeChange={handleModeChange}></NavigationBar>
      <div className="container" style={{ marginLeft: 10, marginTop: 30, marginBottom: 10 }}>
        <span style={{ fontSize: 50, color: 'white' }}>Inventory Stats</span>
      </div>
      <Stats totalProducts={totalProducts} totalValue={totalValue} outOfStock={outOfStock} totalCategories={totalCategories}></Stats>
      <ProductTable products={products}
        isAdminMode={isAdminMode}
        handleDelete={handleDelete}
        handleDisable={handleDisable}
        handleEdit={handleEdit}
      ></ProductTable>
      {showModal && (
        <EditProductModal product={selectedProduct} handleShowModal={handleShowModal} handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit}></EditProductModal>
      )}
    </div>
  );
}

export default App;
