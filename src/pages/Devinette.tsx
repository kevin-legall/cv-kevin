import FlipCard from "./FlipCard.tsx";
import {NavLink} from "react-router-dom";

const Devinette = () => {
    return (
        <main>
            <h1 className={"main-title"}>Devine mon talent !</h1>
            <p>Parmi ces 5 talents inutiles, 2 sont vrais, le reste est faux</p>
            <p>Clique pour tenter ta chance !</p>
            <div className={"centres-interet"}>
                <FlipCard front="Je suis un gros mangeur, j'ai déjà mangé un burger de 1 kg" rear="VRAI (Inutile n'est ce pas ?)"></FlipCard>
                <FlipCard front="Je sais faire 40 pompes d'affilée" rear="FAUX (mais je savais le faire avant 🥲)"></FlipCard>
                <FlipCard front="Je sais faire un salto" rear="FAUX (je suis pas très leste ahah)"></FlipCard>
                <FlipCard front="Je peux reconnaitre un modèle de voiture rien qu'au bruit du moteur" rear="VRAI (bon, peut être pas tous non plus ahah)"></FlipCard>
                <FlipCard front="Je sais pleurer sur commande" rear="FAUX"></FlipCard>
            </div>
            <NavLink to={'/criteres-relation'}><div className={"main-button"}>Continuer</div></NavLink>
        </main>
    );
};

export default Devinette;