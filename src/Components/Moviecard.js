import React from "react";
import { Card } from "react-bootstrap";
import Rate from "./Rate";
import {  BrowserRouter as Router,  Link,  Outlet,  Route,  Routes,} from "react-router-dom";
const Moviecard = ({ movie: { title, posterUrl, description, rate ,id , trailerUrl  }, key }) => {
  return (
    <div className="col-3 mt-3" key={key}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={posterUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Rate  rating = {rate} />
          <Link to={`/${id}`} state = {{description:description , trailerUrl:trailerUrl}} >More</Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Moviecard;
