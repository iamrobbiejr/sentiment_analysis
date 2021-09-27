import React from "react";
import {Link} from "react-router-dom";
import {Button, CardActionArea} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import TextareaAutosize from '@mui/material/TextareaAutosize';


const ProductReview = () => {

    return(
        <>
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
                                                image="https://www.sammobile.com/wp-content/uploads/2021/08/Samsung-Galaxy-S10-5G.jpg"
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Samsung S10
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Samsung
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>

                                    </Card>
                                    <div className="col-md-6" >
                                        <form action="" style={{ marginLeft: 18, marginTop: 3, marginBottom: 2 }}>
                                            <TextareaAutosize
                                                aria-label="minimum height"
                                                className='form-control-plaintext bg-white border-info mb-5'
                                                minRows={4}
                                                placeholder="Enter Your Review"
                                                style={{ width: 800 }}
                                            />
                                            <Button variant="contained" endIcon={<SendIcon />}>
                                                Submit
                                            </Button>
                                        </form>
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

export default ProductReview;