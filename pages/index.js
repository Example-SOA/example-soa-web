import { useState, useEffect } from "react"

const Index = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}`)
      .then(res => res.json())
      .then(res => {
        setItems(res)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Title</th>
        </tr>
        {
          items.map(item => (
            <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
            </tr>
          ))
        }
      </table>
    </div>
  )
}

export default Index
