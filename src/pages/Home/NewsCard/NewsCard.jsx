import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NewsCard.css";
import moment from "moment/moment";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";
const NewsCard = ({ news }) => {
  const {
    _id,
    category_id,
    title,
    name,
    published_date,
    img,
    thumbnail_url,
    image_url,
    details,
    author,
    total_view,
    rating,
  } = news;
  return (
    <Card className="mb-4 rounded-none">
      <Card.Header className="d-flex align-items-center ">
        <Image className="author-img" src={author?.img} roundedCircle />
        <div className="ps-2 flex-grow-1">
          <p className="mb-0">{author?.name}</p>
          <p>
            <small>
              {moment(author?.published_date).format("MMMM D, yyyy")}
            </small>
          </p>
        </div>
        <div className="d-flex">
          <FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img className="rounded-none" variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...
              <Link className="text-success" to={`/news/${_id}`}>
                Read More
              </Link>
            </>
          )}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      <Card.Footer className="text-muted">
        <div>
          <Rating
            placeholderRating={rating?.number}
            readonly
            emptySymbol={<FaRegStar />}
            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          />
          <span>{rating?.number}</span>
        </div>
        <div className="d-flex align-items-center ">
          <FaEye className="mx-2"></FaEye>
          {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
