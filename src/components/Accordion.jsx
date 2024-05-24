import React, { useState } from "react";

export default function Accordion({ label, content }) {
  const [active, setActive] = useState(false);
  const handleToggle = (e) => {
    setActive(!active);
  };

  return (
    <div className={`accordion ${active && "active"}`}>
      <div className="label" onClick={handleToggle}>
        {" "}
        {label}
        <span className="label__arrow"> &#12296; </span>
      </div>

      <div className="content"> {content} </div>
    </div>
  );
}
