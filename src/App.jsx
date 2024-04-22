import { useEffect, useState } from "react"

export const App = () => {

  const initialStaete = 5
  const [num , setNum] = useState(initialStaete)
  const [troll , setTroll] = useState([])
  const [lacago , setLacago] = useState()

  useEffect(() => {
    const users = async () => {
      try {
        const url = await fetch('https://randomuser.me/api/?results=100')
        const data = await url.json()
        setTroll(data)
      } catch (error) {
        setLacago("valecita intente mas tarde")
      } 
    }
    users()
  },[])

  return (
    <>
      <p>{lacago ? lacago : 'data'}</p>
    </>
  )
}