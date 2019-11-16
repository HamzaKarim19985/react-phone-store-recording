import React from "react";

export default function Title({ name, title }) {
  return (
    <div class="row">
      <div class="col-10 mx-auto my-5 text-center text-title">
        <h1 class="text-capitalize font-weight-bold ">
          {name}
          <strong class="text-blue"> {title}</strong>
        </h1>
      </div>
    </div>
  );
}
