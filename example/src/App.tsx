import React, { useState, useEffect, useCallback, useRef } from 'react';
import InfiniteIntersection from 'react-infinite-intersection';

const App = () => {
  const appRef = useRef<HTMLDivElement>(null);
  const intersectionRef = useRef<HTMLButtonElement | any>(null);
  const [children, setChildren] = useState<string[]>([]);
  const callback = useCallback(() => {
      setChildren((state: string[]) => {
        const num = Number(state[state.length - 1].split('_')[1]) + 1;
        const key = `child_${num}`;
        return state.concat(key);
      });
  }, []);

  useEffect(() => {
    let children = [];
    for (let i = 0; i < 5; i++) {
      children.push(`child_${i}`);
    }
    setChildren(children);
  }, []);

  const onClick = () => {
    if (!intersectionRef.current) return;
    intersectionRef.current.unobserve();
  };

  return (
    <>
      <h2>React Infinite Intersection Componenet Example</h2>
      <button onClick={onClick}>unObserve</button>
      <div id="app" ref={appRef}>
        <InfiniteIntersection
          callback={callback}
          root={appRef.current}
          rootMargin={'0px 0px 0px 0px'}
          threshold={0}
          element={'ul'}
          style={{}}
          ref={intersectionRef}
        >
          {
            children.map(child => <ReactImage key={child} />)
          }
        </InfiniteIntersection>
      </div>
    </>
  );
}

function ReactImage() {
  return (
    <li style={{height: '100'}}>
      <p>React Image</p>
      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="" height="100" />
    </li>
  )
};

export default App
