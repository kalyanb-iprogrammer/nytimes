// Component to render Article with data

import React, { Component } from 'react';
import {
    Row,
    Col,
    Button,
    Card,
    Container,
} from "react-bootstrap";
import nopicFound from '../assets/image/no-img.jpg'

class ArticleDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articleData: this.props.location.state
        }
        this.handleReadMore = this.handleReadMore.bind(this);
    }

    handleReadMore(url) {
        window.open(url, '_blank');
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Card 
                        className='detail-card'
                        >
                            <Card.Header>{this.state.articleData.title}</Card.Header>
                            <Card.Body>
                                <Card.Img
                                    className='artcle-image-details'
                                    variant="top"
                                    src={this.state.articleData?.media?.length > 0 ? this.state.articleData?.media[0]["media-metadata"][0]?.url : nopicFound}
                                />
                                <Card.Text>
                                    {this.state.articleData.abstract}
                                </Card.Text>
                                <Card.Text>Published Date : {this.state.articleData.published_date}</Card.Text>

                                <Button variant="primary"
                                    onClick={() => this.handleReadMore(this.state.articleData.url)}
                                >Read More
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>

        )
    }
}

export default ArticleDetail;