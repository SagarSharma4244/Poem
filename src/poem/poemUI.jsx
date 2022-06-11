import React from "react";

export function Poem(props) {
  return (
    <div {...props} id="poem-main">
      {props.children}
    </div>
  );
}
export function Title({ title, ...props }) {
  return (
    <h1 {...props} id="poem-title">
      {props.children}
    </h1>
  );
}

export function Body(props) {
  return (
    <div {...props} id="poem-body">
      {props.children}
    </div>
  );
}
export function Content(props) {
  return (
    <p {...props} id="poem-content">
      {props.children}
    </p>
  );
}
export function Author({ content, ...peops }) {
  return <emphasis id="poem-author"></emphasis>;
}

export default Object.assign(Poem, {
  Title,
  Body,
  Content,
  Author,
});
