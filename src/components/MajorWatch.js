import React from 'react'
import { useSearchParams } from 'react-router-dom'
import CommentContainer from './CommentContainer';
import VideoDescrpt from './VideoDescrpt';

const MajorWatch = () => {

  const [param,setParams] = useSearchParams();
  const vid = param.get('v')
  return (
    <div className='col-span-8'>
      <div>
        <iframe width="710" height="410"
          src={"https://www.youtube.com/embed/"+vid}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen>
        </iframe>
      </div>
      <VideoDescrpt/>
      <CommentContainer/>

    </div>
  )
}

export default MajorWatch;