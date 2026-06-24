import React, { useEffect, useLayoutEffect, useRef } from 'react'

const LayoutEffect = () => {

    const boxRef = useRef();

  useEffect(() => {
    boxRef.current.style.transform = "translateX(300px)";
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        width: "100px",
        height: "100px",
        background: "red",
      }}
    />
  );
}

export default LayoutEffect
