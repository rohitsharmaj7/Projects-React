import streams from '../apis/streams';
import history from '../history';

import {
    SIGN_IN,
    SIGN_OUT, 
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM ,
    DELETE_STREAM,
    EDIT_STREAM
} from './types';

export const signIn = (userId) => {
    return{
        type : SIGN_IN,
        payload:userId
    };
};

export const signOut = () => {
    return{
        type : SIGN_OUT
    };
};


// Various action creators needed for the CRUD operations in our applications

// Creating a Stream
export const createStream = (formValues) => {
      return async (dispatch,getState) => {
             const {userId} = getState().auth;
             const response = await streams.post('/streams', {...formValues,userId});
             dispatch({type:CREATE_STREAM,payload:response.data})
             history.push('/');
      }
}

// Fetching the Streams
export const fetchStreams = () =>{
    return async (dispatch) =>{
        const response = await streams.get('/streams');
        dispatch({type:FETCH_STREAMS,payload:response.data});
    }
} 

// Fetching a single stream
export const fetchStream = (id) =>{
    return async (dispatch) =>{
        const response = await streams.get(`/streams/${id}`);
        dispatch({type:FETCH_STREAM,payload:response.data})
    }
}

// Editing a stream
// put - updates all the properties of a record that we update
// pathch - update selected properties for an object that we try to update
export const editStream = (id, formValues) =>{
    return async (dispatch) =>{
        const response = await streams.patch(`/streams/${id}`,formValues);
        dispatch({type:EDIT_STREAM,payload:response.data})
        history.push('/');
    }
}

// Deleting a Stream
export const deleteStream = (id) =>{
    return async (dispatch) =>{
        await streams.get(`/streams/${id}`);
        dispatch({type:DELETE_STREAM})
    }
}