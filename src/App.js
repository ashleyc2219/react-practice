import Parent from './components/Parent'
import SocialShare from './components/SocialShare'
function App() {
  return (
    <>
      <Parent />
      <br />
      <SocialShare url="http://localhost:3000/" round="true" />
    </>
  )
}
export default App
