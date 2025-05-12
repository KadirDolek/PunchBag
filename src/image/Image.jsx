export default function Image({ scale, vie }) {


const bg =
    <img src="https://api.molengeek.education/storage/uploads/users/410/lesson/4051/bag.png" alt="" style={{transform: `scale(${scale})`}}/>

const bg1 =
    <img src="https://api.molengeek.education/storage/uploads/users/410/lesson/4051/bag-burst.png" alt="" />


  return (
    vie > 0 ? bg : bg1
  );
}
