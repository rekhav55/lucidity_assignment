import React from "react";
import '../css/productTable.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'

const ProductTable = ({ products, isAdminMode, handleEdit, handleDelete, handleDisable }) => {
    return (
        <div className="container-table">
            <div className="row">
                <div className="col-lg-12">
                    <table>
                        <thead>
                            <tr>
                                <th scope="col" style={{ width: 460, height: 60 }}><div className="name">Name</div></th>
                                <th scope="col" className="headers"><div className="category">Category</div></th>
                                <th scope="col" className="headers"><div className="price">Price</div></th>
                                <th scope="col" className="headers"><div className="quantity">Quantity</div></th>
                                <th scope="col" className="headers"><div className="value">Value</div></th>
                                <th scope="col" style={{ width: 360, alignItems: "center" }}><div className="action">Action</div></th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.name} className="content">
                                    <td style={{ color: product.isDisabled || isAdminMode ? 'grey' : 'white' }}>{product.name}</td>
                                    <td style={{ color: product.isDisabled || isAdminMode ? 'grey' : 'white' }}>{product.category}</td>
                                    <td style={{ color: product.isDisabled || isAdminMode ? 'grey' : 'white' }}>{product.price}</td>
                                    <td style={{ color: product.isDisabled || isAdminMode ? 'grey' : 'white' }}>{product.quantity}</td>
                                    <td style={{ color: product.isDisabled || isAdminMode ? 'grey' : 'white' }}>{product.value}</td>

                                    <td>
                                        <>
                                            <FontAwesomeIcon
                                                icon={faPen}
                                                style={{ cursor: 'pointer', color: product.isDisabled || isAdminMode ? 'grey' : 'green', marginRight: 10 }}
                                                onClick={(isAdminMode===false) ? (product.isDisabled===false) ? () => handleEdit(product): ()=>{}: ()=>{}}
                                            />
                                            {product.isDisabled === true || isAdminMode ? <FontAwesomeIcon
                                                icon={faEyeSlash}
                                                style={{ cursor: 'pointer', color: 'pink', marginRight: 10 }}
                                                onClick={(isAdminMode===false) ? (product.isDisabled===true) ? () => handleDisable(product.name, product.isDisabled): ()=>{}:()=>{}}
                                                disabled={isAdminMode} ></FontAwesomeIcon> : <FontAwesomeIcon
                                                    icon={faEye}
                                                    style={{ cursor: 'pointer', color: 'pink', marginRight: 10 }}
                                                    onClick={(isAdminMode===false) ? (product.isDisabled===false) ?() => handleDisable(product.name, product.isDisabled): ()=>{}:()=>{}}
                                                ></FontAwesomeIcon>}
                                            <FontAwesomeIcon
                                                icon={faTrash}
                                                style={{ cursor: 'pointer', color: isAdminMode ? 'grey' : 'red', marginRight: 10 }}
                                                onClick={(isAdminMode===false) ? (product.isDisabled===false) ? () => handleDelete(product.name): ()=>{}: ()=>{}}
                                                disabled={product.isDisabled || isAdminMode} ></FontAwesomeIcon>
                                        </>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductTable;