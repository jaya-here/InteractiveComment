import './Comment.css'
import {useState, useEffect} from 'react'
import Delete from './Delete'
import Newcomment from './Newcomment'

export default function Comment({comment, isUser, addNewComment}) {

  const [edit, setEdit] = useState(false)
  const [editMessage, setEditMessage] = useState('')
  const [deleteState, setDeleteState] = useState(false)
  const [replyActive, setReplyActive] = useState(false)

  function toggleEdit()
  {
    setEdit((prev)=>!prev)
  }

  function toggleDelete() {
    setDeleteState((prev)=>!prev)
  }

  function toggleReply() {
    setReplyActive((prev)=>!prev)
  }

  useEffect(()=>{

    if (edit)
    {
      let input = comment.replyingTo?`@${comment.replyingTo} ${comment.content}`:comment.content
      setEditMessage(input)
    }
    else
    {
      setEditMessage('')
    }

  },[edit])

  return (
    <>
    <article className={`comment
     ${comment.hasOwnProperty('replyingTo')?'comment-reply':''}`}>
        <div className='comment__overall'>
        <div 
        className="comment__user__container">
            <div className='comment_user_container_d'>
            <img src={comment.user.image.png}></img>
            <h6
            className='comment_username'>{comment.user.username}</h6>
            {isUser && <h6 className='comment__currentuser'>you</h6>}
            <p
            className='comment_createdAt'>{comment.createdAt}</p>
            </div>
            <div className='mobile__view__reply'>
            {!isUser && <button  className='mobile__comment__reply__button'
            onClick={toggleReply}>Reply</button>}
            {isUser && 
            <button 
            className='mobile__comment__reply__button delete__button'
            onClick={toggleDelete}
            disabled={edit}>Delete</button>}
            {isUser &&
             <button
            className='mobile__comment__reply__button'
            onClick={toggleEdit}
            disabled={edit}
            >Edit</button>}
            </div>
        </div>
        {edit?
          <>
          <textarea
          type='text'
          value={editMessage}
          className='comment__edit'
          onChange={(e)=>{setEditMessage(e.target.value)}}
          ></textarea>
          <div className='end'>
          <button className='update__button'>Update</button>
          </div>
          </>
          :<p className='comment__content'>
          {comment.hasOwnProperty('replyingTo') 
          && <span>@{comment.replyingTo} </span>} 
          {comment.content}
        </p>}
        </div>
        <div
        className="comment__user__lastname">
        <div
        className="comment_score"> 
            <p className='comment_score_sign'>+</p>
            <p className='comment_score_number'>{comment.score}</p>
            <p className='comment_score_sign'>-</p>
        </div>
        <div className='comment__desktop__buttons'>
            {!isUser && <button className='desktop__comment__reply__button'
            onClick={toggleReply}>Reply</button>}
            {isUser && <button className='desktop__comment__reply__button delete__button'
            onClick={toggleDelete}
            disabled={edit}>Delete</button>}
            {isUser && 
            <button 
            className='desktop__comment__reply__button'
            onClick={toggleEdit}
            disabled={edit}>Edit</button>}
        </div>
        </div>
        {deleteState && <Delete></Delete>}

    </article>
    {replyActive && <Newcomment 
    replyingTo={comment.hasOwnProperty('replyingTo') || comment.user.username}
    isSubReply={comment.hasOwnProperty('replyingTo')}
    addNewComment={addNewComment}></Newcomment>}
    </>
  )
}
