import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <section>
      <h2> The product page </h2>
      <ul>
        <li>
          <Link to='/product/p1'> A Book </Link>
        </li>
        <li>
          <Link to='/product/p2'>A Carpet</Link>
        </li>
        <li>
          <Link to='./product/p3'>An online course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Product;
