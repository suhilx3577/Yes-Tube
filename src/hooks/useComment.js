import {useState, useEffect} from 'react';

export default function useComment (vid) {

    const [comment, setComment] = useState(null)

    async function getCommentDetails(vid) {
        const d = await fetch(`https://www.googleapis.com/youtube/v3/commentThreads?key=${process.env.YOUTUBE_API_KEY}&textFormat=plainText&part=snippet%2Creplies&order=relevance&&videoId=${vid}&maxResults=50`)
        const data = await d.json();
        setComment(data?.items?.slice(0,25));
    }

    useEffect(() => {
        getCommentDetails(vid);
    }, [])

    return [comment];
}