import React, { ReactNode, CSSProperties } from 'react';

type ContainerProps = {
  children: ReactNode,
  element?: string,
  style?: CSSProperties,
}

/**
 * Infinite Scroll Container Component
 */
function Container({ children, element = 'div', style }: ContainerProps) {
  return React.createElement(element, { style }, children);
}

Container.defaultProps = {
  children: null,
  element: 'div',
  style: {},
};

export default Container;
