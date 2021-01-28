import React, { useState, useCallback } from 'react';
import InfiniteIntersection from 'react-infinite-intersection';

const App = () => {
  const [children, setChildren] = useState(5);
  const callback = useCallback(() => {
      setChildren(state => ++state);
  }, [children, setChildren]);

  let childrenList = [];
  for (let i = 0; i < children; i++) {
    childrenList.push(i);
  }
  return (
    <div id="app">
      <InfiniteIntersection
        callback={callback}
        root={undefined}
        rootMargin={'0px 0px 0px 0px'}
        threshold={0}
        style={{}}
      >
        {
          childrenList.map(child => <ReactImage key={child} />)
        }
      </InfiniteIntersection>
    </div>
  );
}

function ReactImage() {
  return (
    <div style={{height: '100'}}>
      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="" height="100" />
    </div>
  )
};

export default App
