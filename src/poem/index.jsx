import React from "react";
import { randomPoemApi } from "./api";

import Poem from "./poemUI";

function PoemPage() {
  const [poemData, setPoemData] = React.useState([]);
  const [idx, setIdx] = React.useState(0);

  React.useEffect(() => {
    async function fetchData() {
      const res = await randomPoemApi();
      setPoemData([...poemData, ...res.data]);
    }
    fetchData();
  }, []);

  React.useEffect(() => {
    async function fetchData() {
      const res = await randomPoemApi();
      setPoemData((p) => [...p, ...res.data]);
    }
    if (idx === poemData.length && idx !== 0) fetchData();
  }, [idx]);

  return (
    <div id="poemboard">
      <SinglePoem
        onClick={() => {
          if (idx !== poemData.length) {
            setIdx(idx + 1);
          }
        }}
        poem={poemData[idx]}
      />
    </div>
  );
}

export function SinglePoem({ poem, ...props }) {
  return (
    <Poem {...props}>
      <Poem.Title>{poem?.title || "Loading..."}</Poem.Title>
      <Poem.Body>
        <Poem.Content>
          {poem?.lines.map((item) => {
            return (
              <React.Fragment idx={item}>
                {item} <br />
              </React.Fragment>
            );
          })}{" "}
        </Poem.Content>
      </Poem.Body>
    </Poem>
  );
}

export default PoemPage;
