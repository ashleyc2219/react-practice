function Child(props) {
  console.log(props)
  return (
    <>
      {props.name}, {props.text}
    </>
  )
}

Child.defaultProps = {
  name: 'Guest',
  text: 'Please Log In...',
}

export default Child
