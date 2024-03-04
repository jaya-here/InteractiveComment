import './Delete.css'

export default function Delete() {
  return (
    <section className="overlay">
        <div className='overlay-content'>
        <h3>Delete comment</h3>
        <p className="text-color">Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
        <div className="button-flex">
        <button className='cancel__button'>No, Cancel</button>
        <button className='deletec__button'>Yes, Delete</button>
        </div>
        </div>
    </section>
  )
}
