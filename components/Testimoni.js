import React from "react";
const Testimoni = ({ professors }) => {
  return (
    <>
      <div className="grid gap-y-14 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {professors.map((listTestimonis, index) => (
          <div
            className={`col-span-1 ${index === 4 && "col-start-2"}`}
            key={index}
          >
            <div className="text-center">
              <img
                src={listTestimonis.image}
                height={120}
                width={120}
                className="rounded-full border-2 border-orange-500 mx-auto mb-4"
                alt="Icon People"
              />
              <div className="h-36 flex-col items-center flex justify-between ">
                <div className="font-medium">{listTestimonis.name}</div>
                <span>{listTestimonis.role}</span>
                <a href={`mailto:${listTestimonis.email}`}>
                  <p className="text-orange-500 mt-3 hover:underline">
                    {listTestimonis.email}
                  </p>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Testimoni;
