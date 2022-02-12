import React from 'react';
import withParams from '../withParams';
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component{
    render(){
        // console.log(this.props);
        const id  = Number(this.props.params.id);
        const posts = this.props.posts;
        const post = posts.find((post) => post.id === id)
        // console.log(post);
        const comments = this.props.comments[id] || [];
        const index = this.props.posts.findIndex((post)=> post.id === id)
        if(this.props.loading === true)
        {
            return <div className='loader'>loading...</div>
        }
        else if(post){
            return(
            <div className='single-photo'>
                <Photo post={post} {...this.props} index={index}/>
                <Comments startAddingComment={this.props.startAddingComment} comments={comments} id={id}/>
            </div>)
        }
        else{
            return <h1>No Post Found</h1>
        }
    }
}

export default withParams(Single);