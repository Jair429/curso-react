import { useState, useEffect } from "react"
import axios from "axios"

const useCourse = id => {

  const [state, setState] = useState({})

  useEffect(() => {
    console.log(useEffect)
    axios
      .get(`http://my-json-server.typicode.com/jair429/json-db/cursos/${id}`)
      .then(resp => setState(resp.data));
  }, [id])

  return state
}

export default useCourse