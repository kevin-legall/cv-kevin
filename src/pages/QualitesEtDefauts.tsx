import photoKevin from "/images/photo-kevin2.jpg";
import {NavLink} from "react-router-dom";

const QualitesEtDefauts = () => {
    return (
        <main>
            <h1 className={"main-title"}>Qualités et Défauts de Kévin</h1>
            <div className={"qualites-defauts"}>
                <img className={"image"} src={photoKevin} alt={"kevin"}/>
                <div className={""}>
                    <p>Qualités :</p>
                    <ul>
                        <li>J'aime me rendre utile et aider les autres (apparemment c'est une qualité rare)</li>
                        <li>Curieux</li>
                        <li>Patient</li>
                        <li>Apparemment je cuisine bien (c'est ce qu'on m'a dit, moi je sais pas 🙄)</li>
                        <li>Je ne juge jamais les autres</li>
                    </ul>
                    <p>Défauts : </p>
                    <ul>
                        <li>Mauvaise audition</li>
                        <li>Mauvaise mémoire</li>
                        <li>Mauvaise mémoire</li>
                        <li>Mauvaise mémoire</li>
                        <li>Je mange beaucoup (trop ?)</li>
                        <li>J'ai eu des manques de communication par le passé, j'essaie d'y faire attention</li>
                        <li>Je trouve que je ne donne pas assez de compliments aux gens alors que je le pense</li>
                        <li>Assez procrastinateur quant il s'agit de prendre soin de ma santé</li>
                        <li>Par le passé je n'offrai pas assez de cadeau à ma chérie, j'essaie d'y faire attention</li>
                    </ul>
                </div>
            </div>
            <NavLink to={'/centres-interet'}><div className={"main-button"}>Continuer</div></NavLink>
        </main>
    );
};

export default QualitesEtDefauts;