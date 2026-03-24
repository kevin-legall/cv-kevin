import {useState} from "react";
import "./FlipCard.css";

interface FlipCardProps {
    front?: string
    rear: string
}

const FlipCard = ({front, rear}: FlipCardProps) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="flip-card" onClick={() => setFlipped(!flipped)}>
            <div className={`flip-card-inner ${flipped ? "flipped" : ""}`}>
                <div className="flip-card-front">
                    <div className="flip-card-icon">✦</div>
                    <p className="flip-card-hint">{ front ? front : "Clique pour en savoir plus" }</p>
                </div>
                <div className="flip-card-back">
                    <h3 className="flip-card-back-title">{rear}</h3>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
