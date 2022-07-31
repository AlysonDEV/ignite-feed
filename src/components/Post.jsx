import styles from './Post.module.css'

export function Post(){
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.autor}>
          <img className={styles.avatar} src="https://github.com/alysondev.png"/>
          <div className={styles.autorInfo}>
            <strong>
              Alyson Ronnan Martins
            </strong>
            <span>Web Developer</span>
          </div>

          <time 
            title='11 de Maio as 08:13' 
            dateTime="2022-05-11 08:00:20">
              Publicado há 1h
          </time>
        </div>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href='#'>jane.design/doctorcare</a></p>
        <p><a href='#'>#novoprojeto #nlw #rocketseat</a></p>
      </div>
    </article>
  )
}