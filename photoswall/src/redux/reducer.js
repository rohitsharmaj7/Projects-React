import postsData from "../data/posts";
import { combineReducers } from "redux";

function comments(state={},action)
{
    switch(action.type)
    {
        case "ADD_COMMENT":
            if(!state[action.payload.postId])
            {
                return {...state,[action.payload.postId]:[action.payload.comment]}
            }
            else
            {
                return {...state,[action.payload.postId]:[...state[action.payload.postId],action.payload.comment]}
            }
            
        default:
            return state;
    }
}


function posts(state = postsData,action)
{
    //console.log(action.payload);
   switch(action.type){
       case 'REMOVE_POST':
         return [...state.slice(0,action.payload), ...state.slice(action.payload+1)]
       case 'ADD_POST':
           return [...state,action.payload]  
           
       default:
           return state;    
   }
}

const rootReducer = combineReducers({posts,comments})

export default rootReducer;