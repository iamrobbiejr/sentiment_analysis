import React, {useEffect, useState} from "react";
import SideBar from '../components/SideBar';
import SentimentAnalysisService from "../services/SentimentAnalysisService";

const Products = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {

        SentimentAnalysisService.get_products()
            .then(res => {
                console.log(res.data)
                setProducts(res.data)
            })
            .catch(err => {
                console.log(err)
                setProducts([])
            })

    }, [])

    return (
        <>
            <SideBar />
            <div id="main-content" className="main-panel ps-container ps-theme-default">
                <div className="content">
                    <div className="container-fluid">
                        <ul className="breadcrumb">
                            Analysis
                        </ul>
                        <div className="row mt">
                            <div className="container-fluid col-md-12">
                                <div className="row mt ">
                                    <div className="container-fluid col-md-6">
                                        <button className="btn btn-success rounded-pill"><i className="fa fa-plus-square" />
                                            &nbsp;ADD PRODUCT</button>
                                        <table className="table table-striped table-responsive">
                                            <thead>
                                            <th>id</th>
                                            <th>name</th>
                                            <th>brand</th>
                                            <th>Actions</th>
                                            </thead>
                                            <tbody>
                                            {products.map((i,j) => {

                                                return (
                                                    <tr>
                                                        <td>{i[0]}</td>
                                                        <td> {i[1]}</td>
                                                        <td> {i[2]}</td>
                                                        <td>
                                                            <button className="btn btn-danger rounded-pill">
                                                                <i className="fa fa-trash-o" />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}


export default Products