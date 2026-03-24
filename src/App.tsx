
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Debut from "./pages/Debut.tsx";
import Description from "./pages/Description.tsx";
import QualitesEtDefauts from "./pages/QualitesEtDefauts.tsx";
import CentresInteret from "./pages/CentresInteret.tsx";
import Devinette from "./pages/Devinette.tsx";
import CriteresRelation from "./pages/CriteresRelation.tsx";
import Fin from "./pages/Fin.tsx";

const App:React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Debut />}></Route>
                <Route path={"/description"} element={<Description />}></Route>
                <Route path={"/qualites-defauts"} element={<QualitesEtDefauts />}></Route>
                <Route path={"/centres-interet"} element={<CentresInteret />}></Route>
                <Route path={"/devine-mon-talent"} element={<Devinette />}></Route>
                <Route path={"/criteres-relation"} element={<CriteresRelation />}></Route>
                <Route path={"/fin"} element={<Fin />}></Route>
            </Routes>
        </BrowserRouter>
    )
};

export default App;
