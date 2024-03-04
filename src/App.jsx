import './App.css'
import rawdata from './assets/data.json'
import Comment from './component/comment/Comment'
import { useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions:{
    queries: {
      staleTime:60
    }
  }
})

function App() {

  const [data, setData] = useState([])
  
  useEffect(()=>{
    setData(rawdata.comments)
  }, [])
 
  return (
    <QueryClientProvider queryClient={queryClient}>
    <div className='comment__container'>

      <img src={`https://dmvjhhqxyabasgaysgtd.supabase.co/storage/v1/object/public/avatars/image-amyrobson.png`}></img>
      <h1>Hello</h1>

      {data.map((comment)=>{

        function addCommentWrapper(id, input, replyingTo) {
          return function addCommentfn() {
            console.log("Here")
            let commentToUpdate = data.filter((data)=>data.id===id)
            const newReplyComment = {"id":8,
          "content":input,
          "createdAt":'1 second ago',
          "score":0,
          "replyingTo":replyingTo,
          "user":{
            image:{
              "png":rawdata.currentUser.image.png,
              "webp":rawdata.currentUser.image.webp   
              },
            "username":rawdata.username}}
            setData((prev)=>{
              return [
                ...prev,
                commentToUpdate[0]
              ]
            })
          }
        }

        const addComment = addCommentWrapper(comment.id)

        return (
        <>
        <Comment 
        comment={comment}
        isUser={comment.user.username === rawdata.currentUser.username}
        addNewComment={addComment}></Comment>
        

        <div style={{position:'relative'}}>
        {comment.replies?.length > 0 &&
          comment.replies.map((commentItem)=>{
              return <Comment 
              comment={commentItem}
              isUser={commentItem.user.username === rawdata.currentUser.username}
              addNewComment={addComment}></Comment>
          })}
        <div className='comment__track'></div>
       </div>
        </>
        )
      })}
    </div>
    </QueryClientProvider>
  )
}

export default App
