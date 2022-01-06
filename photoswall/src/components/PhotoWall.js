import React from 'react';
import { Link } from 'react-router-dom';
import Photo from './Photo';

const PhotoWall = (props) => {
        return(
            <div>
            <Link to='/AddPhoto' className='addIcon'>+</Link>
            <div className="photoGrid">
             {props.posts.sort(function(x,y)
             {
                 return x.id-y.id;
             }).map((post,idx) => {
                 return <Photo post={post} key={idx} {...props} index={idx}/>
             })}
            </div>
            </div>
        ) 
}

export default PhotoWall;