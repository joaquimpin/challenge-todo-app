import React from "react";

export function List({ task }) {

  return (
    <div>
          {task.length !== 0 && task.map((x) => {
              <p>Title:{x.title}</p>
                  <p>Body:{x.body}</p>
            
          })}
    </div>
  );
}
