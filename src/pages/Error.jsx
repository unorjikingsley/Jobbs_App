import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError(); // IS USED TO FIND OUT MORE ABT D ERROR
  console.log(error);

  return (
    <div>
      <h1>Error</h1>
      <Link to='/'>Back Home</Link>
    </div>
  );
};

export default Error;
