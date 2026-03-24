import {NavLink} from "react-router-dom";

const Debut = () => {
    return (
        <main>
            <h1 className={"main-title-debut"}>Bienvenue sur mon CV Camille !</h1>
            <NavLink to={'/description'}><div className={"main-button"}>Commencer</div></NavLink>
        </main>
    );
};

export default Debut;