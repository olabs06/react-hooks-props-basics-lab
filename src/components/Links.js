import React from "react";

import user from "../data/user";
console.log(user);

function Links(props) {
    return (
        <div id="links">
          <h3>Links</h3>
          <a href="#github">{props.github}</a>
          <a href="#linkedin">{props.linkedin}</a>
        </div>
      );
    }
  
  export default Links;