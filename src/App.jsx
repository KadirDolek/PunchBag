import { useState } from 'react'
import './App.css'
import Image from './image/Image'
import Button from './button/Button'
import Progress from './progress/Progress'
import Son from './assets/son/punch-2-37333.mp3'

function App() {
  const [vie, setVie] = useState(100);
  const [scale, setScale] = useState(1);
  const [rotate,SetRotate] = useState(0)

  const handlePunch = () => {
    const son = new Audio(Son)
    son.currentTime= 0.3
    son.play()
    // setVie((prev) => Math.max(prev - 10));
    setVie (vie-10);
    setScale(0.9);
    SetRotate(rotate+25);

    setTimeout(() => {
      SetRotate(0);
    }, 100);
    setTimeout(() => {
      setScale(1);
    }, 100);

    
  };

  const Reset = () => {
    setVie(100);
  };
  


  return (
    <>
  <Progress vie={vie}/>
  <Image vie={vie} scale={scale} rotate={rotate}/>
  <Button punch={handlePunch} reset={Reset} vie={vie} />
    </>
  )
}

export default App
