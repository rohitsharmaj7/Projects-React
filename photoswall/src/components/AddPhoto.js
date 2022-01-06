import React from 'react';
import { Navigate } from 'react-router-dom';

class AddPhoto extends React.Component{

    constructor()
    {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const imageLink = e.target.elements.Link.value;
        const description = e.target.elements.Description.value;

        const post = {
            id:Number(new Date()),
            description:description,
            imageLink:imageLink
        }

        if(description && imageLink)
        {
            this.props.addPost(post)
            this.props.navigate('/')
        }
    }

    render(){
        return(
            <div>
                <h1>Photo Wall</h1>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Link" name="Link"/>
                        <input type="text" placeholder="Description" name="Description"/>
                        <button className='form-button'>Post</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddPhoto;