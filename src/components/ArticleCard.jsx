// Component to render Article with data
import { withRouter } from 'react-router-dom';

import React, { Component } from 'react';
import {
    Row,
    Col,
    Button,
    Card,
} from "react-bootstrap";
import nopicFound from '../assets/image/no-img.jpg'

class ArticleCard extends Component {
    constructor(props) {
        super(props);
        this.handleReadMore = this.handleReadMore.bind(this);
    }

    // Open link in new tab
    handleReadMore(details) {
        this.props.history.push({
            pathname: `/article/${details.id}`,
            state: details
        });
    }

    render() {
        return (
            <Card
                className='article-card'
                onClick={() => this.handleReadMore(this.props.details)}
            >
                <Row>
                    <Col lg={4} md={4} sm={12} xs={12}>
                        <img
                            className='artcle-image'
                            src={this.props.details?.media?.length > 0 ? (this.props.details?.media?.length > 0 ? this.props.details?.media[0]["media-metadata"][0]?.url : '') : nopicFound} />
                    </Col>
                    <Col lg={8} md={4} sm={12} xs={12}
                        className='article'
                    >
                        <Card.Body>
                            <Card.Title>{this.props.details.title}</Card.Title>
                            <Card.Text className='mt-2'>
                                {this.props.details.abstract}
                            </Card.Text>
                            <Card.Text className='mb-2'>
                                <strong>Source :</strong> {this.props.details.source}
                            </Card.Text>
                            <Button variant="primary"
                            >View
                            </Button>
                        </Card.Body>
                    </Col>
                </Row>

            </Card>
        )
    }
}

export default withRouter(ArticleCard);