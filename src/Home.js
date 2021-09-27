import React, {useEffect} from "react";
import ProductCard from './components/ProductCard';

const Home = () => {

    return(
        <>
            <div id="main-content" className="mt-5 ml-1 ps-theme-default">
                <div className="content">
                    <div className="container-fluid">
                        <ul className="breadcrumb">
                            Store Front
                        </ul>
                        <div className="row mt">
                            <div className="container-fluid col-md-12">

                                <ProductCard />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;