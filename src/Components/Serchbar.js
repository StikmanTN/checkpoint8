import React from "react";
import { FormControl, Form, Button } from "react-bootstrap";
import Rate from "./Rate";

const Serchbar = ({ Find , setRatingSerch , ratingSerch }) => {
  return (
    <div className="row">
      <p className="col-3"></p>
      <Form className="col-5 row">
        <FormControl
          onChange={(e) => Find(e)}
          className="col-1"
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
      </Form>
      <Rate starIndex = {setRatingSerch} rating = {ratingSerch} />
    </div>
  );
};

export default Serchbar;
