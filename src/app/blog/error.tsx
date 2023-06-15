"use client";

import { NextPage } from "next";

interface Props {
  error: Error;
}

const Error: NextPage<Props> = ({ error }) => {
  return <div>Oops!!! {error.message}</div>;
};

export default Error;
