import React from "react";

export function List({ task }) {
  return (
    <div>
      {task.length !== 0 &&
        task.map((x) => {
          return (
            <div>
              <p>Title:{x.title}</p>
              <p>Body:{x.body}</p>
            </div>
          );
        })}
    </div>
  );
}
