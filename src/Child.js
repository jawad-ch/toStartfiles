import React from "react";

const Child = ({ username, cities, children, click }) => {
  const [azer] = cities;
  console.log(azer);

  return (
    <div>
      {username}
      {children}
      <button onClick={() => click("hamid")}>clickMe</button>
    </div>
  );
};

export default Child;
