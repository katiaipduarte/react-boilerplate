import React from "react";

interface HelloProps {
  compiler: string;
  framework: string;
}

const Hello = (props: HelloProps): JSX.Element => {
  const { compiler, framework } = props;
  return (
    <h1>
      Hello {compiler} and {framework}
    </h1>
  );
};

export default Hello;
