import React from 'react';

type HelloWorldProps = {
  message: string;
};


const HelloWorld: React.FC<HelloWorldProps> = ({ message }) => {
  return <h1>{message}</h1>;
};

export default HelloWorld;
