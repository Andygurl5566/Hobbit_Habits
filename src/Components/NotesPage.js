import GlobalHeader from "./GlobalHeader"
import {Link} from "react-router-dom"
import NotesContainer from "./NotesContainer.js"


function NotesPage({chosen}){
    console.log(chosen.length)
    return (
    <div>
        <GlobalHeader />
            <div className = "button-div">
                <Link to ="/main-page"> <button> Back </button></Link>
                <NotesContainer key={chosen.id} chosen={chosen}/>
            </div>
    
    </div>
    )

}

export default NotesPage