import React from "react";

export async function getServerSideProps(context) {
  const id = context.query.id;
  return {
    props: {
      id,
    },
  };
}

const ID = ({ id }) => {
  return (
    <div className=" mt-20 text-center text-6xl  ">
      Este es el repositorio: <strong>{id}</strong>
    </div>
  );
};

export default ID;
