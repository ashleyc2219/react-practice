import PropTypes from 'prop-types'
function Child(props) {
  console.log(props)
  return (
    <>
      {props.name}, {props.text}
    </>
  )
}
// 設定預設props，父元件沒傳值進來時使用
Child.defaultProps = {
  name: 'Guest',
  text: 'Please Log In...',
}

// 使用套件，限制傳進來得props資料類型
Child.PropTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
export default Child
