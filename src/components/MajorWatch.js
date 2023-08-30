import React from 'react'
import { useSearchParams } from 'react-router-dom'
import CommentContainer from './CommentContainer';
import VideoDescrpt from './VideoDescrpt';

const MajorWatch = () => {

  const [param] = useSearchParams();
  const vid = param.get('v')
  return (
    <div className='mt-4 xl:col-span-8'>
      <div> 
        <iframe
        className='w-[90vw] h-[60vw] xl:w-[58vw] lg:h-[35vw]'
          src={"https://www.youtube.com/embed/"+vid}
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