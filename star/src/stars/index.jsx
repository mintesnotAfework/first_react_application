import { useState } from "react";
import { FaStar } from 'react-icons/fa';
import './styles.css'


function Star({noStar=5}){
    const [rating,setRating] = useState(0);
    const [hoverRating,setHoverRating] = useState(0);
    
    function mouseHover(currentIndex){
        setHoverRating(currentIndex);
    }
    function mouseLeave(currentIndex){
        setHoverRating(0);
    }
    function clickStar(currentIndex){
        setRating(currentIndex);
    }

    return(<div className="star-container">
        {
            [...Array(noStar)].map((_,i)=>{
                return <FaStar 
                    key={i}
                    onClick={() => clickStar(i+1)}
                    className={i < rating || i < hoverRating? "active":"inactive"}
                    onMouseLeave={() => mouseLeave(i+1)}
                    onMouseMove={() => mouseHover(i+1)}
                    size={40}
                />
            })

        }

    </div>);
}

export default Star;