"use client";
const Error = ({ error }: { error: Error & { digest?: string } }) => {
  return (
    <div>
      <h1>Error - {error.message}</h1>
    </div>
  );
};

export default Error;
