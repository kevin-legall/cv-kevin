import FlipCard from "./FlipCard.tsx";
import {NavLink} from "react-router-dom";

const CentresInteret = () => {
    return (
        <main>
            <h1 className={"main-title"}>Centres d'intérêts</h1>
            <p>Clique sur les cartes et découvre mes centres d'intérêts</p>
            <div className={"centres-interet"}>
                <FlipCard rear="Automobile"></FlipCard>
                <FlipCard rear="Informatique"></FlipCard>
                <FlipCard rear="Fitness"></FlipCard>
            </div>
            <NavLink to={'/devine-mon-talent'}><div className={"main-button"}>Continuer</div></NavLink>
        </main>
    );
};

export default CentresInteret;