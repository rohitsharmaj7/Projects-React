import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {withRouter} from '../withRouter';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import Single from './Single';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removePost,startAddingPost,startLoadingPosts,startRemovingPost,startAddingComment,startLoadingComments } from '../redux/actions';
import {addPost} from '../redux/actions';
import {addComment} from '../redux/actions';

class Main extends React.Component{

    state = {
       loading:true
    }

   componentDidMount()
   {
      this.props.startLoadingPosts().then(()=>{ this.setState({loading:false}) })   
      this.props.startLoadingComments()   
   }

    render()
    {
        return(
            <div>
                <Routes>
                    <Route exact path="/" element= {
                         <div>
                            <Title title={"Photos Wall"}/>
                            <PhotoWall {...this.props}/>
                        </div>
                    }/>
                    
                    <Route exact path="/AddPhoto" element={
                        <AddPhoto {...this.props}/>
                    }/> 

                    <Route path="/single/:id" element={  
                      <Single loading={this.state.loading} {...this.props}/> 
                    }/>
                </Routes>
            </div>
        )
    }
}

function mapStateToProps(state)
{
    return {
        posts:state.posts,
        comments:state.comments
    }
}

// We are using this so that we can write this.props.actionCreator instead of this.props.dispatch(actioncretor)
function mapDispatchToProps(dispatch)
{
    return bindActionCreators({removePost,addPost,addComment,startAddingPost,startLoadingPosts,startRemovingPost,startAddingComment,startLoadingComments},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Main));