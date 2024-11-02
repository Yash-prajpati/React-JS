import counter from "../Reduser/Reduser";
import {Combinereducers} from "redux";



const mainRedusers=Combinereducers({
    yash:counter,
});


export default  mainRedusers;

