import React, {useEffect, useState} from "react";
import SideBar from '../components/SideBar';
import { Line, PolarArea } from 'react-chartjs-2';
import SentimentAnalysisService from "../services/SentimentAnalysisService";
import Spinner from "reactjs-simple-spinner";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const required = (value) => {
    if (!value) {
        return (
            <div className="error" >
                This field is required!
            </div>
        );
    }
};

let data = {
    labels: ['Bad', 'Good'],
    datasets: [
        {
            label: '# of Reviews',
            data: [12, 20],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
            ],
            borderWidth: 1,
        },
    ],
};



const Dashboard = () => {

    const [products, setProducts] = useState([]);
    const [month, setMonth] = useState('');
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [showButtons, setShowButtons] = useState(false);
    let [goodReviews, setGoodReviews] = useState(0);
    let [badReviews, setBadReviews] = useState(0);
    const [productName , setProductName] = useState(' ');
    useEffect(() => {

        setShow(false)
        setShowButtons(false)

        const d = new Date();
        const n = d.getMonth();


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

    const handleChange = (e) => {
        setMonth(e.target.value)
        setShowButtons(true)
        console.log(e.target.value)

    }

    const showAnalysis = (id, name) => {
        setLoading(true);
        setProductName(name);


        //get reviews of product
        SentimentAnalysisService.get_product_reviews(id)
            .then(res => {
                const d = new Date();
                const n = d.getMonth();

                const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']


                res.data.map((i,j) => {
                    console.log(month)
                    console.log(i[4].search(month))
                    if (i[4].search(month) !== -1){
                        if(i[3] == 0){
                            badReviews += 1

                        }else{
                            goodReviews += 1

                        }
                        //update data
                        data = {
                            labels: ['Bad', 'Good'],
                            datasets: [
                                {
                                    label: '# of Reviews',
                                    data: [badReviews, goodReviews],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.5)',
                                        'rgba(54, 162, 235, 0.5)',
                                    ],
                                    borderWidth: 1,
                                },
                            ],
                        };
                        //end
                    }else {
                        console.log('fail')
                        //update data
                        data = {
                            labels: ['Bad', 'Good'],
                            datasets: [
                                {
                                    label: '# of Reviews',
                                    data: [0, 0],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.5)',
                                        'rgba(54, 162, 235, 0.5)',
                                    ],
                                    borderWidth: 1,
                                },
                            ],
                        };
                        //end
                    }
                })
                console.log("bad",badReviews)
                console.log("good ",goodReviews)



                setLoading(false);
                setShow(true);
            })
            .catch(err => {
                console.log(err)
                setLoading(false);
                setShow(false);
                toast.error('Analysis Failed, Try Again Later')
            })

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
            <SideBar/>
            <div id="main-content" className="main-panel ps-container ps-theme-default">
                <div className="content">
                    <div className="container-fluid">
                        <ul className="breadcrumb">
                            Analysis
                        </ul>
                        <div className="row mt">
                            <div className="container-fluid col-md-5 scroll">

                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Select Month</FormLabel>
                                    <RadioGroup  validations={[required]} onChange={handleChange} row aria-label="month" name="row-radio-buttons-group">
                                        <FormControlLabel value="Jan" control={<Radio />} label="Jan" />
                                        <FormControlLabel value="Feb" control={<Radio />} label="Feb" />
                                        <FormControlLabel value="Mar" control={<Radio />} label="Mar" />
                                        <FormControlLabel value="Apr" control={<Radio />} label="Apr" />
                                        <FormControlLabel value="May" control={<Radio />} label="May" />
                                        <FormControlLabel value="Jun" control={<Radio />} label="Jun" />
                                        <FormControlLabel value="Jul" control={<Radio />} label="Jul" />
                                        <FormControlLabel value="Aug" control={<Radio />} label="Aug" />
                                        <FormControlLabel value="Sep" control={<Radio />} label="Sep" />
                                        <FormControlLabel value="Oct" control={<Radio />} label="Oct" />
                                        <FormControlLabel value="Nov" control={<Radio />} label="Nov" />
                                        <FormControlLabel value="Dec" control={<Radio />} label="Dec" />
                                    </RadioGroup>
                                </FormControl>
                                <table className="table table-striped table-responsive">
                                    <thead>

                                    <th>name</th>

                                    <th>Actions</th>
                                    </thead>
                                    <tbody>
                                    {products.map((i,j) => {

                                        return (
                                            <tr>
                                                <td> {i[1]}</td>

                                                <td>
                                                    {showButtons && (
                                                        <button onClick={() => showAnalysis(i[0], i[1])} className="btn btn-sm btn-primary rounded-pill">
                                                            <i className="fa fa-line-chart" />
                                                            &nbsp;Show Sentiment Analysis
                                                        </button>
                                                    )}

                                                </td>
                                            </tr>
                                        )
                                    })}
                                    </tbody>
                                </table>
                            </div>
                            <div className="container-fluid col-md-7" >
                                {loading && (
                                    <div id="login-page">
                                        <div className="container">
                                            <form className="loader">
                                                <div className="login-wrap mt-5">
                                                    <Spinner
                                                        size="medium"
                                                        message="Please Wait, Good things take time..."
                                                        line-fg-color="#64c3c2"
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                )}
                                {!loading && show && (
                                    <>
                                        <h4 className="text-center">{productName}</h4>
                                        <PolarArea data={data} width={100}/>
                                    </>
                                )}
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Dashboard;