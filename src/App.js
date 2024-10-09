import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/navbar';
import Stats from './components/stats';
import ProductTable from './components/productTable';
import axios from 'axios';
import EditProductModal from './components/editProduct';

function App() {
  const [isAdminMode, setIsAdminMode] = useState(false); //used to state whether it is admin mode or user mode
  const [products, setProducts] = useState([]); // maintain the products array
  const [selectedProduct, setSelectedProduct] = useState(null); //hold the product to be updated
  const [showModal, setShowModal] = useState(false); // used to ope and close the edit form

  useEffect(() => {
    fetchProducts();
  }, []);

  //fetch products list
  const fetchProducts = async () => {
    const response = await axios.get("https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory");
    const productsWithIsDisabled = response.data.map((product) => ({
      ...product,
      isDisabled: false,
    }));
    setProducts(productsWithIsDisabled);
  };
  //fucntion to update admin mode
  const handleModeChange = () => setIsAdminMode(!isAdminMode);
  //function to handle edit form modal 
  const handleShowModal = () => setShowModal(!showModal);

  //function to update the product to be updated
  const handleEdit = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  //function to delete product
  const handleDelete = (name) => {
    setProducts(products.filter((product) => product.name !== name));
  };

  //function to disable product
  const handleDisable = (name, isDisabled) => {
    setProducts(
      products.map((product) =>
        product.name === name ? { ...product, isDisabled: !isDisabled } : product
      )
    );
  };

  //fucntion to handle edit form changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedProduct({ ...selectedProduct, [name]: value });
  };

  //function to update the product array after editing
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setProducts(
      products.map((product) =>
        product.name === selectedProduct.name ? selectedProduct : product
      )
    );
    setShowModal(false);
  };

  //calculate total products
  const totalProducts = products.length;
  //calculate total store value
  const totalValue = products.reduce((val, product) => {
    const numericValue = parseInt(product.value.replace('$', ''));
    return val + numericValue;
  }, 0);
  //calculate out of stock product
  const outOfStock = products.filter((product) => product.quantity === 0).length;
  //calculate total categories of product 
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
