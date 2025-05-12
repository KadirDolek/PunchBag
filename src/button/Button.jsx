import './Button.css'



export default function Button({ vie, punch, reset }) {
    
  const isDead = vie === 0;

  return (
    <button id="btn" onClick={isDead ? reset : punch}>
      {isDead ? 'Reset' : 'Cogner'}
    </button>
  );
}
