import React from "react";
import { useParams } from "react-router";

function Product() {
  const { productId } = useParams();
  console.log("test:", productId);
  return <div>Product</div>;
}

export default Product;
