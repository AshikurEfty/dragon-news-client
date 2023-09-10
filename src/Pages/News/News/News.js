import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './News.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const News = () => {
    const news = useLoaderData();
    const {title, details, image_url, category_id} = news;
    return (
            <Card>
              <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="primary" className='go-home' >All news in this category</Button></Link>
                </Card.Body>
            </Card>

    );
};

export default News;