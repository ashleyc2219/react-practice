import { data } from './data/student'

function App() {
  console.log(data);

  const newData = data.map((value, index) => {
    return <li>{value.name}</li>
  })
  // 會是array裡面是react的物件
  console.log(newData);
  return (
    <>
      <ul>
        {/* 用map將資料加上li標籤 */}
        {data.map((value, index) => {
          return <li key={index}>{value.name}</li>
        })}
      </ul>
    </>
  )
}
export default App
