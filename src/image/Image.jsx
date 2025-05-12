import "./Image.css";
export default function Image({ scale, vie, rotate }) {
  const bg = (
    <img
      src="https://api.molengeek.education/storage/uploads/users/410/lesson/4051/bag.png"
      alt=""
      style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
    />
  );

  const bg1 = (
    <img
      src="https://api.molengeek.education/storage/uploads/users/410/lesson/4051/bag-burst.png"
      alt=""
    />
  );

  return vie > 0 ? bg : bg1;
}
