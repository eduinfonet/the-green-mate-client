import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInSides from "../EditorsInSides/EditorsInSides";

const News = () => {
  const news = useLoaderData();
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
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="danger" className="bg-[red] ">
              {" "}
              <FaArrowLeft className="me-2"></FaArrowLeft> All News in this
              category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <EditorsInSides></EditorsInSides>
    </div>
  );
};

export default News;
