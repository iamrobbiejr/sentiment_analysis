import React, {useEffect, useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {Link} from "react-router-dom";
import SentimentAnalysisService from "./services/SentimentAnalysisService";

const Home = (props) => {

    const [products, setProducts] = useState([]);

    const handlePostReview = (id) => {
        //store variable in local storage
        console.log(id)
        localStorage.setItem('id', JSON.parse(id))
        // redirect to page
        props.history.push('/product-review')
    }

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
<div className="row mt ">
    {products.map((i,j) => {

        return(
            <Card sx={{ maxWidth: 365, marginLeft: 18, marginTop: 3, marginBottom: 2 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        width="400"
                        image="https://static.vecteezy.com/system/resources/previews/002/787/097/non_2x/cylinder-abstract-minimal-scene-with-geometric-platform-summer-background-3d-rendering-with-podium-stand-to-show-cosmetic-products-stage-showcase-on-pedestal-modern-3d-studio-blue-pastel-free-vector.jpg"
                        alt="product"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {i[1]}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {i[2]}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick={() => handlePostReview(i[0])} size="small" color="primary">
                        Post Review
                    </Button>
                </CardActions>
            </Card>
        )
    })}

</div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;