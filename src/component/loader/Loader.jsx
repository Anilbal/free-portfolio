import React, { useEffect, useState } from 'react'
import './loader.css'

const Loader = () => {
    const [move, setMove] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMove(true);
    }, 4000); 

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={`loader-page ${move ? 'move' : ''}`}>
        <h1>Music</h1>
        <h1>Expression</h1>
        <h1>Repertoire</h1>
    </div>
  )
}

export default Loader