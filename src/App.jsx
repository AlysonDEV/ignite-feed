import { Post } from "./Post"

function App() {

  return (
    <div>
      <Post 
        autor="Alyson Ronnan" 
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi odio illo aliquam officia reiciendis eligendi laudantium laboriosam aut ipsa sunt, delectus culpa non repellat cumque ad eaque similique? Veniam, neque?"
      />
      <Post 
        autor="Alyson Ronnan"
        content="Valeu mesmo"
      />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default App
