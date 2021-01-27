import React from 'react';
import InfiniteIntersection from 'react-infinite-intersection';

function App() {
  const callback = () => {

  };

  const children = [ReactImage, ReactImage, ReactImage, ReactImage];
  return (
    <>
      <h1>react infinite interection example</h1>
      <div>
        <InfiniteIntersection
          root={window}
          rootMargin={'0px 0px 0px 0px'}
          threshold={0}
          callback={callback}
          element={'div'}
          style={{width: '500px', border: '1px solid'}}
          children={children}
        />
      </div>
    </>
  );
}

function ReactImage() {
  return (
    <div style={{height: '500px'}}>
      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="" height="20" />
    </div>
  )
};

export default App;
