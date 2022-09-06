import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h1>PAGE NOT FOUND.</h1>
      <Link to="/"> Go Back</Link>
    </>
  );
}

export default NotFound;
