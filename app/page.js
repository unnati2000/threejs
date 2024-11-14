// // import Image from "next/image";
// "use client";
// import { useRef, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls  } from '@react-three/drei';
// import  {Armchair}  from './Armchair';

// import { Environment, Sphere } from "@react-three/drei";
// import { LayerMaterial } from "lamina";

 

// export default function Home() {

//   const [color, setColor] = useState("blue");

//   return (
//     <div className="grid grid-cols-2 h-screen border">
//       <div id="canvas-container" >
//         <Canvas camera={{ position: [2, 2, 2] }}>
//         <OrbitControls />
//         <ambientLight intensity={0.5} />
//       <Environment preset="apartment" />

       
//       <Armchair position={[0, 0, 0]} color="#ffffff" />
      
          
          
//       <directionalLight position={[-5, 5, -5]} intensity={0.5} />
     
//         </Canvas>
//       </div>

//       <div className="flex flex-col justify-center items-center">
//         <div className="flex items-center gap-1">
//         <div className="h-10 w-10 bg-blue-500" onClick={() => setColor("blue")}></div>
//         <div className="h-10 w-10 bg-pink-500" onClick={() => setColor("pink")}></div>
//         </div>
//       </div>
//       </div>
//     );
// }


"use client";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from '@react-three/drei';
import { Armchair } from './Armchair';

export default function Home() {
  const [color, setColor] = useState("#ffffff");

  return (
    <div className="grid grid-cols-2 h-screen border">
      <div id="canvas-container" >
        <Canvas camera={{ position: [2, 2, 2] }}>
          <OrbitControls />
          <Environment preset="sunset" />
          <Armchair position={[0, 0, 0]} color={color} />
          <directionalLight position={[0, 2, 0]}  />
        </Canvas>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center gap-1">
        
<div className="h-10 w-10 cursor-pointer" style={{backgroundColor: "#FF4D4D"}} onClick={() => setColor("#FF4D4D")}></div> {/* Bright Red */}
  <div className="h-10 w-10 cursor-pointer" style={{backgroundColor: "#FF6B6B"}} onClick={() => setColor("#FF6B6B")}></div> {/* Coral Red */}
  <div className="h-10 w-10 cursor-pointer" style={{backgroundColor: "#FF9933"}} onClick={() => setColor("#FF9933")}></div> {/* Orange */}
  
  {/* Vibrant Cool Colors */}
  <div className="h-10 w-10 cursor-pointer" style={{backgroundColor: "#4D79FF"}} onClick={() => setColor("#4D79FF")}></div> {/* Bright Blue */}
  <div className="h-10 w-10 cursor-pointer" style={{backgroundColor: "#5CE1E6"}} onClick={() => setColor("#5CE1E6")}></div> {/* Turquoise */}
  <div className="h-10 w-10 cursor-pointer" style={{backgroundColor: "#38B6FF"}} onClick={() => setColor("#38B6FF")}></div> {/* Sky Blue */}
  
  {/* Vibrant Nature Colors */}
  <div className="h-10 w-10 cursor-pointer" style={{backgroundColor: "#66FF66"}} onClick={() => setColor("#66FF66")}></div> {/* Lime Green */}
  <div className="h-10 w-10 cursor-pointer" style={{backgroundColor: "#33CC33"}} onClick={() => setColor("#33CC33")}></div> {/* Fresh Green */}
  
  {/* Vibrant Fashion Colors */}
  <div className="h-10 w-10 cursor-pointer" style={{backgroundColor: "#FF66FF"}} onClick={() => setColor("#FF66FF")}></div> {/* Hot Pink */}
  <div className="h-10 w-10 cursor-pointer" style={{backgroundColor: "#9933FF"}} onClick={() => setColor("#9933FF")}></div> {/* Purple */}

        </div>
      </div>
    </div>
  );
}