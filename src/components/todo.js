import React, { useState } from "react";

export function Todo({ title, body }) {
  return (
    <div>
      <p>Title: {title}</p>
      <p>Body: {body}</p>
    </div>
  );
}
