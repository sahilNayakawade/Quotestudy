
// import axios from "axios";
// import React, { useEffect, useState } from "react";

// function Like(props) {
  
//   const [isLike, setIsLike] = useState(false);
//  debugger

// debugger
//   const onLikeButtonClick = () => {
    
//     const quoteId = props.quoteId;
//     console.log(quoteId);
//     console.log(props);
//     const userId = parseInt(sessionStorage.getItem('userId'), 10);

//     console.log(userId);
//     axios.post(`http://localhost:8483/api/quotes/addtofav/${quoteId}/${userId}`)
//       .then((response) => {
//         setIsLike(response.data);
//         console.log(response.data)
//         //setIsLike(!isLike);
//       })
//       .catch((error) => {
//         console.error('Error updating like count:', error);
//       });
//   };
  
//   return (
//     <p className={isLike ? "text-danger" : ""}>
//       <i
//         className={`fa fa-heart${isLike ? "" : "-o"}`}
//         style={{ fontSize: 36 }}
//         onClick={onLikeButtonClick}
//       ></i>
//     </p>
//   );
// }

// export default Like;
import axios from "axios";
import React, { useEffect, useState } from "react";

function Like(props) {
  const quoteId = props.quoteId;
  const userId = parseInt(sessionStorage.getItem('userId'), 10);

  const [isLike, setIsLike] = useState(() => {
    // Retrieve like status from local storage, default to false if not found
    const storedLikeStatus = localStorage.getItem(`like_${quoteId}_${userId}`);
    return storedLikeStatus ? JSON.parse(storedLikeStatus) : false;
  });

  const onLikeButtonClick = () => {
    axios.post(`http://localhost:8483/api/quotes/addtofav/${userId}/${quoteId}`)
      .then((response) => {
        const newLikeStatus = response.data;
        setIsLike(newLikeStatus);

        // Save the like status to local storage
        localStorage.setItem(`like_${quoteId}_${userId}`, JSON.stringify(newLikeStatus));
      })
      .catch((error) => {
        console.error('Error updating like count:', error);
      });
  };
  
  return (
    <p className={isLike ? "text-danger" : ""}>
      <i
        className={`fa fa-heart${isLike ? "" : "-o"}`}
        style={{ fontSize: 36 }}
        onClick={onLikeButtonClick}
      ></i>
    </p>
  );
}

export default Like;
