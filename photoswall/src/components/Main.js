import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {withRouter} from '../withRouter';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';

class Main extends React.Component{
    constructor(){
       super()
       this.state={
           posts:[{
            id: 0,
            description: "beautiful landscape",
            imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
            "3919321_1443393332_n.jpg"
            }, {
            id: 1,
            description: "Aliens???",
            imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
            }, {
            id: 2,
            description: "On a vacation!",
            imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
        }]
       }

       this.removePhoto=this.removePhoto.bind(this);
       this.AddPhoto=this.AddPhoto.bind(this);
    }

    removePhoto(postRemoved){
       console.log(postRemoved.description);
        this.setState((state)=>({
            posts:state.posts.filter(post=> post!== postRemoved)
        })
    )}

    AddPhoto(postAdded)
    {
        console.log(this.props);
        this.setState((state)=>({
            posts:state.posts.concat([postAdded])
        }))
        this.props.navigate('/')
    }

    render()
    {
        return(
            <div>
                <Routes>
                    <Route exact path="/" element= {
                         <div>
                            <Title title={"Photos Wall"}/>
                            <PhotoWall onRemovePhoto={this.removePhoto} posts={this.state.posts}/>
                        </div>
                    }/>
                    
                    <Route exact path="/AddPhoto" element={
                        <AddPhoto onAddPhoto={
                            (addedPost)=>{this.AddPhoto(addedPost)}
                        }/>
                    }/> 
                </Routes>
            </div>
        )
    }
}

export default withRouter(Main);