import React, {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {Button, CardActionArea} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import SentimentAnalysisService from "./services/SentimentAnalysisService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from 'reactjs-simple-spinner';
import CheckButton from "react-validation/build/button";
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';

const required = (value) => {
    if (!value) {
        return (
            <div className="error" >
                This field is required!
            </div>
        );
    }
};

const ProductReview = () => {
    const form = useRef();
    const checkBtn = useRef();

    const [product, setProduct] = useState({});
    const [id, setId] = useState('');
    const [review, setReview] = useState('');
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [reviewError, setReviewError] = useState('');

    const removeReviewErrors = () =>{
        setReviewError('');
    }

    const onChangeReview = (e) => {
        setReview(e.target.value);
    }

    useEffect(() => {
        setLoading(false);
        const id = localStorage.getItem('id');
        console.log(parseInt(id))
        setId(parseInt(id))

        // get single product
        SentimentAnalysisService.get_product(parseInt(id))
            .then(res => {
                console.log(res.data)
                setProduct(res.data)
            })
            .catch(err => {
                console.log(err)
                setProduct([])
            })
        //get reviews of product
        SentimentAnalysisService.get_product_reviews(parseInt(id))
            .then(res => {
                console.log(res.data)
                setReviews(res.data)
            })
            .catch(err => {
                console.log(err)
                setReviews([])
            })

    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        form.current.validateAll();
        setLoading(true);

        if (checkBtn.current.context._errors.length === 0) {
            SentimentAnalysisService.add_review(id, review)
                .then(res => {
                    console.log(res)
                    toast('Post Successful');
                    setReview(' ');
                    //get reviews of product
                    SentimentAnalysisService.get_product_reviews(id)
                        .then(res => {
                            console.log(res.data)
                            setReviews(res.data)
                            setLoading(false);
                        })
                        .catch(err => {
                            console.log(err)
                            setReviews([])
                            setLoading(false);
                        })

                    //load reviews
                })
                .catch(err => {
                    console.log(err)
                    toast.error('Post Failed, Try again later');
                    setLoading(false);
                })
        }else{
            setLoading(false);
            toast.error('Fill in details')
        }
    }

    return(
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
            <div id="main-content" className="mt-5 ml-1 ps-theme-default">
                <div className="content">
                    <div className="container-fluid">
                        <ul className="breadcrumb">
                            <Link to={'/'}>Store Front</Link> &nbsp;/&nbsp; Review Product
                        </ul>
                        <div className="row mt">
                            <div className="container-fluid col-md-12">
                                <div className="row mt ">
                                    <Card sx={{ marginLeft: 18, marginBottom: 2 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image="https://static.vecteezy.com/system/resources/previews/002/787/097/non_2x/cylinder-abstract-minimal-scene-with-geometric-platform-summer-background-3d-rendering-with-podium-stand-to-show-cosmetic-products-stage-showcase-on-pedestal-modern-3d-studio-blue-pastel-free-vector.jpg"
                                                alt="product"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {product[1]}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {product[2]}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>

                                    </Card>
                                    <div className="col-md-6" >
                                        <Form onSubmit={handleSubmit} ref={form} style={{ marginLeft: 18, marginTop: 3, marginBottom: 2 }}>
                                            <TextareaAutosize
                                                aria-label="minimum height"
                                                className='form-control-plaintext bg-white border-info mb-5'
                                                minRows={4}
                                                placeholder="Enter Your Review"
                                                onKeyDown={removeReviewErrors}
                                                onChange={onChangeReview}
                                                validations={[required]}
                                                value={review}
                                                style={{ width: 800 }}
                                            />
                                            <center> <span className="error">{ reviewError }</span></center>
                                            <Button  type="submit" onClick={handleSubmit} variant="contained" endIcon={<SendIcon />}>
                                                Submit
                                            </Button>
                                            <CheckButton style={{display: "none"}} ref={checkBtn} />
                                        </Form>
                                    </div>
                                </div>
                                <div className="row mt-4 ">
                                    <div className="bg-white p-5 container-fluid col-md-8">
                                        <h4 className="heading">Reviews</h4>
                                        {reviews.map((i,j) => {
                                            return (
                                                <>
                                                    <p className="text-body mb-3">
                                                        <span className="text-primary">{j}.&nbsp;</span>
                                                        {i[2]}
                                                        <br/>
                                                        <span className="float-right">  {i[4]}</span>
                                                    </p>

                                                    <hr/>
                                                </>
                                            )
                                        })}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </>
    )
}

export default ProductReview;