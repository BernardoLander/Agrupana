import { useState } from 'react'
import styles from './Comments.module.css'


const Comments = () => {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const onClickHandler = () => {
        setComments((comments)=> [...comments, comment]);
    };
    const onChangeHandler = (e) => {
        setComment(e.target.value);
    };

  return (
    <div className = {styles.mainContainer}>
        {comments.map((text)=> (
            <div className ={styles.commentContainer} key={text.id}>{text}</div>
        ))}
        <div className={styles.commentFlexbox}>
            <h3 className={styles.commentText}>Comentar</h3>
            <textarea 
                value ={comment} 
                onChange={onChangeHandler} 
                className={styles.inputBox}
            />
            <button onClick={onClickHandler}className={styles.commentButton}>Enviar</button>
        </div>
        
    </div>
  )
}

export default Comments
