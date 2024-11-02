let intitialstate=0;
const counter = (state=intitialstate,action)=>{
    switch(action.type){
        case 'inc' :
        return state+1;

        default :
        return state;

    }
}
export default counter;