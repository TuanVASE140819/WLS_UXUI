import React, { useEffect, useRef } from "react";

const listGift = [
  { text: "I phone 13", percent: 0.1 },
  { text: "Siêu xe", percent: 0.1 },
  { text: "1tr vnd", percent: 0.05 },
  { text: "Khóa học html-css free", percent: 0.05 },
  //   { text: "Laptop", percent: 0.05 },
  //   { text: "Một cái like", percent: 0.4 },
  //   { text: "Khóa học js free", percent: 0.1 },
  //   { text: "Áo khoác Gucci", percent: 0.2 },
];

const Wheel = ({ isRotating, currentRotate, startRotation }) => {
  const wheelRef = useRef(null);

  const rotate = 360 / listGift.length;
  const skewY = 90 - rotate;

  const getGift = () => {
    const random = Math.random();
    let currentPercent = 0;
    for (let i = 0; i < listGift.length; i++) {
      currentPercent += listGift[i].percent;
      if (random <= currentPercent) {
        return { ...listGift[i], index: i };
      }
    }
  };

  const rotateWheel = (index) => {
    wheelRef.current.style.transform = `rotate(${
      currentRotate - index * rotate - rotate / 2
    }deg)`;
  };

  useEffect(() => {
    if (isRotating) {
      const gift = getGift();
      const newRotate = currentRotate + 360 * 10;
      startRotation(gift.text, newRotate);
      rotateWheel(gift.index);
    }
  }, [isRotating]);

  return (
    <ul className="wheel" ref={wheelRef}>
      {listGift.map((item, index) => (
        <li
          key={index}
          style={{
            transform: `rotate(${rotate * index}deg) skewY(-${skewY}deg)`,
          }}
        >
          <p
            style={{ transform: `skewY(${skewY}deg) rotate(${rotate / 2}deg)` }}
            className={`text ${index % 2 === 0 ? "text-1" : "text-2"}`}
          >
            <b>{item.text}</b>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Wheel;
