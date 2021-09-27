import React from "react";
import SideBar from '../components/SideBar';

const Dashboard = () => {

    return(
        <>
            <SideBar/>
            <div id="main-content" className="main-panel ps-container ps-theme-default">
                <div className="content">
                    <div className="container-fluid">
                        <ul className="breadcrumb">
                          Dashboard
                        </ul>
                        <div className="row mt">
                            <div className="container-fluid col-md-12">
                                <div className="row mt ">
                                    <h1>Working</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;