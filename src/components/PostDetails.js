import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
const PostDetails = () => {
  let { id } = useParams();
  let [searchParams, setSearchParams] = useSearchParams()
  const operation = searchParams.get("operation");
  const number1 = searchParams.get("value1");
  const number2 = searchParams.get("value2");

  console.log(id);
  console.log(operation);
  console.log(number1);
  console.log(number2);

  return <h1>Your id is {id}</h1>;
};

export default PostDetails;