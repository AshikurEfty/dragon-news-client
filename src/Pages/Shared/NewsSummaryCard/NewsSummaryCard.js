import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaEye, FaRegBookmark , FaShareAlt, FaStar } from 'react-icons/fa';


const NewsSummaryCard = ({news}) => {
    const {title, _id, author, image_url, details,rating, total_view} = news;
    return (
        <div>
            <Card className="mb-3">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <Image src={author?.img} style={{height:'60px'}} roundedCircle className='me-2' ></Image>
                        <div>
                          <p className='mb-0'>{author?.name}</p>
                          <p>{author?.published_date}</p>
                        </div>
                    </div>
                    <div>
                      <FaRegBookmark className='me-2'></FaRegBookmark>
                      <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
            <Card.Body>
                <Card.Img variant="top" src={image_url} />
                <Card.Title className='mt-4'>{title}</Card.Title>
                    <Card.Text>
                        {
                        details.length > 250 ? 
                            <>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read more</Link></>
                            :
                            details
                        } 
                    </Card.Text> 
            </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between">
                    <div> 
                        <FaStar className='text-warning mb-1 me-2'></FaStar>
                        <span className='m'>{rating?.number}</span>
                    </div>
                    <div>
                        <FaEye className='me-1'></FaEye>
                        <span>{total_view}</span>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummaryCard;