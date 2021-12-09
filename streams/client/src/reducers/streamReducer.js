import { EDIT_STREAM, FETCH_STREAM,FETCH_STREAMS,DELETE_STREAM, CREATE_STREAM } from "../actions/types";
import _ from 'lodash';
// Sample code to update records using array based approach

// const streamReducer = (state=[],action) => {
//     switch(action.type){
//         case Edit_Stream:
//             return state.map(stream => {
//                 if(stream.id === action.payload.id)
//                 {
//                     return action.payload;
//                 }
//                 else
//                 {
//                     return stream;
//                 }
//             })
//     }
// }


// Code using the object based approach
export default (state={},action) =>{
    switch(action.type)
    {
        case FETCH_STREAMS:
            return {...state,..._.mapKeys(action.payload,'id')}
            
        case FETCH_STREAM:
            return {...state,[action.payload.id]:action.payload}

        case CREATE_STREAM:
            return {...state,[action.payload.id]:action.payload}

        case EDIT_STREAM:
            // const newState = {...state};
            // newState[action.payload.id] = action.payload;
            // return newState;

            // alternate approach/syntax  [identical to first but better than it]
            return {...state,[action.payload.id]:action.payload}

        case DELETE_STREAM:
            return _.omit(...state,action.payload);

        default:
            return state;
    }
}