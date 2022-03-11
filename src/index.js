import ReactDom from "react-dom"
import Corpo from "./Corpo"
import Navbar from "./Navbar"
import RodapeMobile from "./RodapeMobile"

function App(){
    return(
        <div>
            <Navbar />
            <Corpo />
            <RodapeMobile />
        </div>
    )
}

const root = document.querySelector('.root');
ReactDom.render(<App />, root);