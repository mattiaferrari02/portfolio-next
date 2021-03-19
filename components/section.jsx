import React, { useState } from "react";
import Head from "next/head";

import Skill from "../components/skill";

const Section = (props) => (
  <div className={props.className}>
    <h1 className="text-2xl ">⭐&nbsp;{props.title}:</h1>

    <div className=" text-gray-900">
      {props.skills.map((section) => (
        <Skill section={section} key={props.skills.indexOf(section)} />
      ))}
    </div>
  </div>
);

export default Section;
