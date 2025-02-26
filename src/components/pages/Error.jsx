import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const { status, statusText } = err;
  return (
    <>
      <h2>OOPs!</h2>
      <p>Something Wrong</p>
      <h2>
        {status}: {statusText}
      </h2>
    </>
  );
};
export default Error;
