import React, { Component } from 'react';
import axios from 'axios';
import ArticleCard from './ArticleCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Col, Row } from 'react-bootstrap';

class ArticleList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            loading: true,
            error: null,
        };
    }

    componentDidMount() {
        // Make API call to NY Times API
        this.fetchData();
    }


    // fetch data from API
    fetchData = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/1.json?api-key=${this.props.apiKey}`);

            if (response?.status === 200) {
                this.setState({
                    data: response?.data?.results,
                    loading: false,
                });

            } else {
                this.setState({
                    loading: false,
                    error: error.message,
                });
                toast.error("API failed!")

            }

        } catch (error) {
            this.setState({
                loading: false,
                error: error.message,
            });
            toast.error(error.message)

        }
    };

    render() {
        const { data, loading } = this.state;

        // Loading UI
        if (loading) {
            return <p>Loading ...</p>;
        }

        return (
            <div>
                <h1>NY Times Most Popular News</h1>
                <ToastContainer />

                {loading ? loading : <>
                    {data.map((item) => {
                        return (
                            <Row key={item.id}>
                                <Col
                                    lg={{ offset: 2, span: 8 }}
                                    md={{ offset: 2, span: 8 }}
                                    sm={{ offset: 2, span: 8 }}
                                    xs={{ offset: 2, span: 8 }}
                                >
                                    <ArticleCard details={item} />
                                </Col>
                            </Row>
                        )

                    })}
                </>
                }
            </div>
        );
    }
}

export default ArticleList;