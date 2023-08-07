import React ,{useEffect , useState}from 'react'
import VideoDetails from './VideoDetails'
import { useSearchParams } from 'react-router-dom'

const MajorWatch = () => {
  const [param] = useSearchParams();
  const cid = param.get('c')


  return (
    <div className='col-span-7'>
      <div>
        <iframe width="650" height="380"
          src={"https://www.youtube.com/embed/"+param.get('v')}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen>
        </iframe>
      </div>
      <VideoDetails/>
      <div>
        Comment Section
      </div>
    </div>
  )
}

export default MajorWatch