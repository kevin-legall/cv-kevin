import {NavLink} from "react-router-dom";
import photoKevin from "/images/photo-kevin3.jpg";

const CriteresRelation = () => {
    return (
        <main>
            <h1 className={"main-title"}>Ce que je cherche chez l'autre personne dans une relation</h1>
            <div className={"criteres"}>
                <img className={"image"} src={photoKevin}  alt={"kevin"}/>
                <div>
                    <p className={"mini-text"}>Communicante, j’ai connu des filles qui communiquait pas assez sur ce qu’elles ressentaient quand ça allait pas bien ou autres. Donc c’est important pour moi</p>
                    <p className={"mini-text"}>Qu’elle soit bosseuse et qu’elle sache ce qu’elle veut aussi, qu’elle ai des projets, pas des trucs de fou forcément mais qu’elle sache ou elle va</p>
                    <p className={"mini-text"}>Qu’elle ai un peu d’humour, qu’on puisse rigoler ensemble mais aussi parler de choses sérieuses quand il le faut</p>
                    <p className={"mini-text"}>Qu’elle soit avenante aussi peut être, des fois c’est bien de laisser les choses se faire mais c’est bien aussi d’amener des idées, de ne pas avoir peur de dire les choses et de proposer des trucs</p>
                    <p className={"mini-text"}>Respectueuse aussi, que ce soit avec elle ou avec les autres :)</p>
                </div>
            </div>
            <NavLink to={'/fin'}><div className={"main-button"}>Continuer</div></NavLink>
        </main>
    );
};

export default CriteresRelation;