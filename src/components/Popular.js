import React from "react";

const Popular = () => {
  const languages = ["ALL", "Javascript", "Ruby", "Java", "CSS", "Python"];
  return (
    <ul className="flex-center">
      {languages.map(item => (
        <li key={item}>
          <button className="btn-clear nav-link">{item}</button>
        </li>
      ))}
    </ul>
  );
};

export default Popular;
