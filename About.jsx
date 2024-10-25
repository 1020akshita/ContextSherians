import React, { useEffect, useRef } from 'react'

const About = () => {
  const inputRef = useRef(null);

  // component के load होते ही input field पर focus आ जाएगा
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <div>
        <input ref={inputRef} type="text" placeholder="Enter something..." />
      </div>

    </>
  )
}

export default About
