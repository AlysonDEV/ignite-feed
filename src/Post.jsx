export function Post(props) {
  return (
    <>
      <strong>{props.autor||"Sem dados"}</strong>
      <p>{props.content||"Sem dados"}</p>
    </>
  )
}