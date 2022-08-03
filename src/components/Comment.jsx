import { useState } from 'react'
import { ThumbsUp, Trash } from 'phosphor-react'

import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({content, onDeleteComment}) {
  const [like, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)   
  }

  function handleLikeComment() {
    setLikeCount(like+1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/alysondev.png"/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.autorAndTime}>
              <strong>Alyson Ronnan Martins</strong>
              <time 
                title='11 de Maio as 08:13' 
                dateTime="2022-05-11 08:00:20">
                  Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={() => {
            setLikeCount(like+1)
          }}>
            <ThumbsUp />
            Aplaudir <span>{like}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}