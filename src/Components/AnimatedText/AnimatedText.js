// import React, { useState, useEffect } from "react";
// import "./AnimatedText.css";

// const AnimatedText = () => {
//     const [rotation, setRotation] = useState(0);

//     useEffect(() => {
//         const rotationInterval = setInterval(() => {
//             setRotation((prevRotation) => prevRotation + 1)
//         });

//         return () => {
//             clearInterval(rotationInterval);
//         }
//     }, []);

//     return (
//         <div className="animated-text" style={{ transform: 'rotate(${rotation}def)'}}>
//             Justin Acosta
//         </div>
//     );
// };
// export default AnimatedText;