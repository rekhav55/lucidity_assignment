import React from "react";
import '../css/editProduct.css'

const EditProductModal = ({ handleShowModal, product, handleFormSubmit, handleInputChange }) => {
    return (
        <>
            <div className="modal-wrapper"></div>
            <div className="modal-container">
                <div className="name-container">
                    <div className="row">
                        <div className="col-sm-9" id="header">
                            <span className="edit-header">Edit Product</span><br></br>
                            <span className="product-header">{product.name}</span>
                        </div>
                        <div className="col-sm-2" id="cancel-header">
                            <button onClick={handleShowModal} className="cross-button"><span>X</span></button>
                        </div>
                    </div>
                </div>
                <div className="form-container">
                    <form onSubmit={handleFormSubmit}>

                        <div className="label-container-1">
                            <div className="row">
                                <div className="col-lg-6" id="labels">
                                    <span>Category</span>
                                </div>
                                <div className="col-lg-6" id="labels">
                                    <span>Price</span>
                                </div>
                            </div>
                        </div>
                        <div className="input-container">
                            <input type='text' name="category" value={product.category} onChange={handleInputChange} className="input-fields" required></input>
                            <div className="inner"></div>
                            <input type='text' name="price" value={product.price} onChange={handleInputChange} className="input-fields" required></input>
                        </div>

                        <div className="label-container-2">
                            <div className="row">
                                <div className="col-lg-6" id="labels">
                                    <span>Quantity</span>
                                </div>
                                <div className="col-lg-6" id="labels">
                                    <span>Value</span>
                                </div>
                            </div>
                        </div>
                        <div className="input-container">
                            <input type='text' name="quantity" value={product.quantity} onChange={handleInputChange} className="input-fields" required></input>
                            <div className="inner"></div>
                            <input type='text' name="value" value={product.value} onChange={handleInputChange} className="input-fields" required></input>
                        </div>

                        <div className="button-container">
                            <button onClick={handleShowModal} className="cancel-button">Cancel</button>
                            <button type="submit" onClick={handleFormSubmit} className="save-button">Save</button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    );
};

export default EditProductModal;
