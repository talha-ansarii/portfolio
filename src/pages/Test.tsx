import React, { useState, useEffect } from "react";
import { Input } from "../../components/ui/input";

// Define the PuzzleGame component
const PuzzleGame: React.FC = () => {
  const [imgUrl, setImgUrl] = useState("profile.png"); // Default image
  const [positions, setPositions] = useState<number[]>([...Array(16).keys()]);

  useEffect(() => {
    // Shuffle the positions for the initial puzzle setup
    setPositions((prevPositions) => {
      const newPos = [...prevPositions];
      newPos.sort(() => Math.random() - 0.5);
      return newPos;
    });
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImgUrl(url);
    }
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, position: number) => {
    e.dataTransfer.setData("text/plain", position.toString());
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, position: number) => {
    e.preventDefault();
    const originalPosition = parseInt(e.dataTransfer.getData("text"));

    setPositions((prevPositions) => {
      const newPos = [...prevPositions];
      [newPos[originalPosition], newPos[position]] = [
        newPos[position],
        newPos[originalPosition],
      ];
      return newPos;
    });
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className="game-container flex flex-col justify-center gap-6 items-center md:flex-row  ">
     

      <div className="puzzle-container">
        {positions.map((pos, index) => {
          const x = (pos % 4) * 100;
          const y = Math.floor(pos / 4) * 100;
          return (
            <div
              key={index}
              className="puzzle-piece"
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDrop={(e) => handleDrop(e, index)}
              onDragOver={handleDragOver}
              style={{
                backgroundImage: `url('${imgUrl}')`,
                backgroundPosition: `-${x}px -${y}px`,
              }}
            />
          );
        })}
      </div>

      <div className="flex flex-col gap-2">

<div className="reference-image">
  <img src={imgUrl} alt="Reference" />
</div>

<label className="custom-file-upload mb-4 text-center cursor-pointer bg-[#EFF1C5] px-4 py-2 rounded  transition">
  Upload Image
  <Input
    type="file"
    accept="image/*"
    onChange={handleImageUpload}
    className="hidden"
  />
</label>
</div>
    </div>
  );
};

export default PuzzleGame;
