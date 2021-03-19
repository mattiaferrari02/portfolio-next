import React, { useState } from "react";
import Head from "next/head";

const Skill = ({ section }) => {
  const [element, setElement] = useState(section[0]);

  return (
    <div className="py-4">
      {section.map((element) => (
        <div className="inline-block mb-3" key={element.name}>
          <span
            className="rounded-full px-5 py-1 text-sm font-bold mr-2 cursor-pointer"
            style={{ backgroundColor: element.color }}
            onClick={(event) => setElement(element)}
          >
            {element.name}
          </span>
        </div>
      ))}

      <div className="shadow w-full bg-gray-200 mt-4 rounded-full">
        <div
          className="text-xs leading-none py-1 text-center text-white rounded-full"
          style={{ width: element.skill, backgroundColor: element.color }}
        >
          {element.skill}
        </div>
      </div>
    </div>
  );
};

export default Skill;
