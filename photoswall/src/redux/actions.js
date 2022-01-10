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