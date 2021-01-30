# react-infinite-intersection

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-infinite-intersection.svg)](https://www.npmjs.com/package/react-infinite-intersection) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<br>

## Description

This is a project that implements an infinite scroll component using the intersectionObserver API.

<br>

## Install

```bash
npm install --save react-infinite-intersection
```

<br>

## Demo

- [Demo Codesandbox](https://codesandbox.io/s/dawn-cloud-kvlns?fontsize=14&hidenavigation=1&theme=dark)

<br>

## Usage

```tsx
import React, { useState, useEffect, useCallback, useRef } from 'react';
import InfiniteIntersection from 'react-infinite-intersection';

const App = () => {
  // your code ...

  return (
    <>
      <h2>React Infinite Intersection Componenet Example</h2>
      <div id="app" ref={appRef}>
        <InfiniteIntersection
          callback={intersection observer callback}
          root={intersection observer root option}
          rootMargin={intersection observer root option}
          threshold={intersection observer threshold option}
          element={container element tag type}
          style={container element tag style}
          ref={intersection component ref}
        >
          {
            children.map(child => <ReactImage key={child} />)
          }
        </InfiniteIntersection>
      </div>
    </>
  );
}
```

<br>

### intersection observer unobserve

```tsx
const intersectionRef = useRef<HTMLButtonElement>(null);

// unobserve
intersectionRef.current.unobserve 

<InfiniteIntersection
  ref={intersection component ref}
>

```

<br><br>

## License

MIT © [Luffy Yeon](https://github.com/Luffy Yeon)
