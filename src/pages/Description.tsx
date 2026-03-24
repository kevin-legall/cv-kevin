import {NavLink} from "react-router-dom";
import photoKevin from '/images/photo-kevin.png'


const Description = () => {
    return (
        <main>
            <h1 className={"main-title"}>Description</h1>
            <div className={"description"}>
                <img className={"image"} src={photoKevin}  alt={"kevin"}/>
                <div>
                    <p>Bonjour, moi c'est Kévin, 25 ans, 1m79 (mais ça fait mieux de dire 80). Ne vous inquiétez pas, même si j'ai une tête triste (merci Aurore pour le choix de la photo), je suis quand même un garçon qui sourit beaucoup et qui possède une joie de vivre, en particulier lorsque je suis bien accompagné :)</p>
                    <p>Passionné d'automobile et d'informatique, je suis de nature curieuse et j'aime prendre le temps de bien faire les choses</p>
                </div>
            </div>
            <NavLink to={'/qualites-defauts'}><div className={"main-button"}>Continuer</div></NavLink>
        </main>
    );
};

export default Description;