import React from 'react';

class Comments extends React.Component{

    constructor()
    {
        super();
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event)
    {
        event.preventDefault();
        const comment = event.target.elements.comment.value;
        this.props.addComment(comment,this.props.id)
        event.target.elements.comment.value = '';
    }

    render(){
      
        return(
            <div className='comment'>
                {
                  this.props.comments.map((c,idx) => {
                   return(
                       <p key={idx}>{c}</p>
                   )
                  })
                }
               <form className="comment-form" onSubmit={this.handleSubmit}>
                   <input type="text" name="comment" placeholder="Enter your comment here"/>
                   <input type="submit" value="submit" hidden/>
               </form>
            </div>
        )
    }
}

export default Comments;