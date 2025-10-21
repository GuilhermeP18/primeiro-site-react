import {React} from "react";
import MainContainer from "./AnimationCard.jsx";
import '../styles/main.css';


function Main() {  
    const mainContainerCard = {
        width: '100%',
        height: 'auto',
        backgroundColor: '#31777cff',
    }
    const cardContainer = {
        width: '75%',
        height: 'auto',
        perspective: '1000px',
    }
    return  (
        <div style={mainContainerCard}>
            <div style={cardContainer}>
                {/* Card animation component can be placed here */}
            </div>
        </div>
    );
}

export default Main;