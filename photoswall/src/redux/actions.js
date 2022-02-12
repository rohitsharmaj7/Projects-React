import { database } from "../database/config";

export function startAddingPost(post)
{
   return (dispatch)=>{
      return database.ref('posts').update({[post.id]:post}).then(()=>{
        dispatch(addPost(post))
      }).catch((err)=>{console.log(err);})
   }
}

export function startLoadingPosts()
{
  return(dispatch)=>{
    let posts = [];
    return database.ref('posts').once('value').then((snapshot)=>{
       
          snapshot.forEach(childSnapshot => {
             posts.push(childSnapshot.val())          
        });
        dispatch(loadPosts(posts))
    })
  }
}

export function startRemovingPost(index,id)
{
    return (dispatch) =>{
      return database.ref(`posts/${id}`).remove().then(()=>{
        dispatch(removePost(index))
      })
    }
}

export function startAddingComment(comment,postId)
{
  return (dispatch) =>{
    return database.ref(`comment/${postId}`).push(comment).then(()=>{
      dispatch(addComment(comment,postId))
    })
  }
}

export function startLoadingComments()
{
  return (dispatch) =>{
    return database.ref('comment').once('value').then((snapshot)=>{
      let comment = {};
      snapshot.forEach((childSnapshot) => {
        comment[childSnapshot.key] = Object.values(childSnapshot.val())
      })
      console.log(comment);
      dispatch(loadComments(comment))
    })
  }
}

export function loadComments(comments)
{
  return{
    type:"LOAD_COMMENTS",
    comments
  }
}

export function loadPosts(posts)
{
  return{
    type:"LOAD_POSTS",
    payload:posts
  }
}

export function removePost(index)
{
  return {
      type:"REMOVE_POST",
      payload:index
  }
}

export function addPost(post)
{
    return{
       type:"ADD_POST",
       payload:post
    }
}

export function addComment(comment,postId)
{
  return{
    type:"ADD_COMMENT",
    payload:{comment,postId}
  }
}