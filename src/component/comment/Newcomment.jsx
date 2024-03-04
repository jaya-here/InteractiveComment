import { useEffect, useState } from 'react'
import './Newcomment.css'


export default function Newcomment({replyingTo, isSubReply, addNewComment}) {

  console.log(addNewComment)

  let [comment, setComment] = useState('')

  useEffect(()=>{
    setComment(`@${replyingTo} `)
  }, [])

  return (
    <section className={`newcomment ${isSubReply?'newcomment-reply':''}`}>
        <div className="newcomment__icon">
        {/*<img src={comment.user.image.png}></img>*/}
        </div>
        <div className="newcomment__text">
        <textarea
          type='text'
          value={comment}
          className='comment__edit'
          onChange={(e)=>{}}
          ></textarea>
        </div>
        <div className="newcomment__button">
        <button className="button-reply"
        onClick={addNewComment}>Send</button>
        </div>
    </section>
  )
}
