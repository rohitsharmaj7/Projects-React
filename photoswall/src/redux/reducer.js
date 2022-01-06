import postsData from "../data/posts";

const postReducer = function posts(state = postsData,action)
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

export default postReducer;