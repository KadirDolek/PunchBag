import { useState } from 'react'
import './App.css'
import Image from './image/Image'
import Button from './button/Button'
import Progress from './progress/Progress'

function App() {
  const [vie, setVie] = useState(100);
  const [scale, setScale] = useState(1);

  const handlePunch = () => {
    setVie((prev) => Math.max(prev - 10));
    setScale(0.9);

    setTimeout(() => {
      setScale(1);
    }, 50);
  };

  const Reset = () => {
    setVie(100);
    setScale(1);
  };


  return (
    <>
  <Progress vie={vie}/>
  <Image vie={vie} scale={scale}/>
  <Button punch={handlePunch} reset={Reset} />
    </>
  )
}

export default App
