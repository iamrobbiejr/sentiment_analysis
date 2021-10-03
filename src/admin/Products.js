import React, {useEffect, useState} from "react";
import SideBar from '../components/SideBar';
import SentimentAnalysisService from "../services/SentimentAnalysisService";
import Spinner from "reactjs-simple-spinner";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const required = (value) => {
    if (!value) {
        return (
            <div className="error" >
                This field is required!
            </div>
        );
    }
};

const Products = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {

        setLoading(false);
        handleClose()
        setName('')
        setBrand('')
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

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeBrand = (e) => {
        setBrand(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        handleClose()
        SentimentAnalysisService.add_product(name, brand)
            .then(res => {
                console.log(res)
                SentimentAnalysisService.get_products()
                    .then(res => {
                        console.log(res.data)
                        setProducts(res.data)
                        setLoading(false)
                        toast('Added Successfully')
                    })
                    .catch(err => {
                        console.log(err)
                        setLoading(false)
                        toast('Operation Failed')
                    })
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
                handleClose()
                toast('Operation Failed')
            })
    }

    const [loading, setLoading] = useState(false);
    const deleteProduct = (id) => {
        setLoading(true)
        SentimentAnalysisService.delete_product(id)
            .then(res => {
                console.log(res)
                SentimentAnalysisService.get_products()
                    .then(res => {
                        console.log(res.data)
                        setProducts(res.data)
                        setLoading(false)
                        toast('Deleted Successfully')
                    })
                    .catch(err => {
                        console.log(err)
                        setLoading(false)
                        toast('Delete Failed')
                    })

            })
            .catch(err => {
                console.log(err)
                toast.error('Failed: '+err)
                setLoading(false)
            })
    }

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                style={{ color: "white" }}
            />
            <SideBar />
            <div id="main-content" className="main-panel ps-container ps-theme-default">
                <div className="content">
                    <div className="container-fluid">
                        <ul className="breadcrumb">
                            Products
                        </ul>
                        <div className="row mt">
                            <div className="container-fluid col-md-12">
                                <div className="row mt ">
                                    {loading && (
                                        <div id="login-page">
                                            <div className="container">
                                                <form className="loader">
                                                    <div className="login-wrap mt-5">
                                                        <Spinner
                                                            size="medium"
                                                            message="Please Wait..."
                                                            line-fg-color="#64c3c2"
                                                        />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    )}
                                    {!loading && (
                                    <div className="container-fluid col-md-6">
                                        <button onClick={handleClickOpen} className="btn btn-sm btn-success rounded-pill"><i className="fa fa-plus-square" />
                                            &nbsp;ADD PRODUCT</button>
                                        <>
                                            <Dialog open={open} onClose={handleClose}>
                                                <DialogTitle>Subscribe</DialogTitle>
                                                <DialogContent>
                                                    <DialogContentText>
                                                        To add product provide name of product and brand.
                                                    </DialogContentText>
                                                    <TextField
                                                        autoFocus
                                                        margin="dense"
                                                        id="name"
                                                        label="Product Name"
                                                        type="text"
                                                        value={name}
                                                        onChange={onChangeName}
                                                        validations={[required]}
                                                        fullWidth
                                                        variant="standard"
                                                    />
                                                    <TextField
                                                        margin="dense"
                                                        id="brand"
                                                        label="Brand"
                                                        value={brand}
                                                        onChange={onChangeBrand}
                                                        validations={[required]}
                                                        type="text"
                                                        fullWidth
                                                        variant="standard"
                                                    />
                                                </DialogContent>
                                                <DialogActions>
                                                    <Button onClick={handleClose}>Cancel</Button>
                                                    <Button onClick={handleSubmit}>Submit</Button>
                                                </DialogActions>
                                            </Dialog>
                                        </>
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
                                                            <button onClick={() => deleteProduct(i[0])} className="btn btn-sm btn-danger rounded-pill">
                                                                <i className="fa fa-trash-o" />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                            </tbody>
                                        </table>
                                    </div>
                                    )}
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