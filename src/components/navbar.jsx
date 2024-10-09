import React from 'react';
import { Switch, ConfigProvider } from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'
import '../css/navbar.css'
function NavigationBar({ isAdminMode, handleModeChange }) {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <div className="ms-auto d-flex align-items-center">
                    <label className="mr-2" id="admin-class">admin</label>
                    <ConfigProvider
                        theme={{
                            components: {
                                Switch: {
                                    handleSize: 12,
                                    trackHeight: 15,
                                    trackMinWidth: 30,
                                },
                            },
                        }}
                    ><Switch onChange={handleModeChange} checked={isAdminMode} className ="switch"/></ConfigProvider>
                    <label className="mr-2" id="user-class">user</label>
                    <FontAwesomeIcon icon={faSignOut} className='signout'/>
                </div>
            </nav>
        </>
    );
}

export default NavigationBar;
