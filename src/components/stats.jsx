import React from 'react'
import '../css/stats.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faCircleDollarToSlot, faList } from '@fortawesome/free-solid-svg-icons'
function Stats({ totalProducts, totalValue, outOfStock, totalCategories }) {
    return (
        <>
            <div className="stats-container">
                <div className="stat">
                    <div className="row">
                        <div className="col-sm-2">
                            <FontAwesomeIcon
                                icon={faCartShopping}
                                className='icons'
                            />
                        </div>
                        <div className='col-sm-5'>
                            <div className='row' id="stat-header"><span>Total Product</span></div>
                            <div className='row' id="stat-value"><span>{totalProducts}</span></div>
                        </div>
                    </div>
                </div>
                <div className="stat">
                <div className="row">
                        <div className="col-sm-2">
                            <FontAwesomeIcon
                                icon={faCircleDollarToSlot}
                                className='icons'
                            />
                        </div>
                        <div className='col-sm-5'>
                            <div className='row' id="stat-header"><span>Total Store Value</span></div>
                            <div className='row' id="stat-value"><span>{totalValue}</span></div>
                        </div>
                    </div>
                </div>
                <div className="stat">
                <div className="row">
                        <div className="col-sm-2">
                            <FontAwesomeIcon
                                icon={faCartShopping}
                                className='icons'
                            />
                        </div>
                        <div className='col-sm-5'>
                            <div className='row' id="stat-header"><span>Out of Stock</span></div>
                            <div className='row' id="stat-value"><span>{outOfStock}</span></div>
                        </div>
                    </div>
                    
                </div>
                <div className="stat">
                <div className="row">
                        <div className="col-sm-2">
                            <FontAwesomeIcon
                                icon={faList}
                                className='icons'
                            />
                        </div>
                        <div className='col-sm-6'>
                            <div className='row' id="stat-header"><span>No of Categories</span></div>
                            <div className='row' id="stat-value"><span>{totalCategories}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Stats;
