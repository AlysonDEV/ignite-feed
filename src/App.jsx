import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import styles from './App.module.css'

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main >
          <Post 
            autor="Diego Fernandes"
            content="Lorem ipsum dolor sit amet. Qui internos omnis ab commodi illo aut officiis voluptatem ut minima consequatur quo eveniet quibusdam et omnis veniam. Id fuga temporibus ex ipsam beatae id laborum exercitationem et dolores nobis non ipsa quos. Ut architecto consectetur 33 voluptates voluptatum non nobis quaerat."
          />
          <Post 
            autor="Alyson Ronnan"
            content="Lorem ipsum dolor sit amet. Qui internos omnis ab commodi illo aut officiis voluptatem ut minima consequatur quo eveniet quibusdam et omnis veniam. Id fuga temporibus ex ipsam beatae id laborum exercitationem et dolores nobis non ipsa quos. Ut architecto consectetur 33 voluptates voluptatum non nobis quaerat."
          />
        </main>
      </div>
    </div>

  )
}

