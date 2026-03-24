import { NavLink } from "react-router-dom";
import { useState } from "react";

const Fin = () => {
    const [response, setResponse] = useState<string>("");

    const handleClick = (value: number) => {
        switch (value) {
            case 1:
                setResponse("Tu me détestes tant que ça... ?");
                break;
            case 2:
                setResponse("Tu me détestes tant que ça... ?");
                break;
            case 3:
                setResponse("Insulte moi tant que t'y est !!");
                break;
            case 4:
                setResponse("Insulte moi tant que t'y est !!");
                break;
            case 5:
                setResponse("La moyenne, pas mal");
                break;
            case 6:
                setResponse("peux mieux faire c'est ça ?");
                break;
            case 7:
                setResponse("Génial !");
                break;
            case 8:
                setResponse("Cooool merci !");
                break;
            case 9:
                setResponse("Wow ça me va droit au coeur !!");
                break;
            case 10:
                setResponse("C'est ou qu'on signe pour nous deux ?");
                break;
            default:
                setResponse("");
                break;
        }
    };

    return (
        <main>
            <h1 className={"main-title-debut"}>C'est la fin de mon CV !!</h1>
            <p>Quelle note lui donnerais-tu ?</p>
            <div className={"notes"}>
                {[1,2,3,4,5,6,7,8,9,10].map((n) => (
                    <button key={n} onClick={() => handleClick(n)}>{n}</button>
                ))}
            </div>
            <h2>{response}</h2>
            <NavLink to={'/'}><div className={"main-button"}>Recommencer au début</div></NavLink>
        </main>
    );
};

export default Fin;