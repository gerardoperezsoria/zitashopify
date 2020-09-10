import { useState, useEffect } from 'react'

function useFetch(url, defaultValue) {
  const [data, setData] = useState(defaultValue)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url,{method: 'POST',})
      .then(response => response.json())
      .then(data => {
        setData(data)
      })
      .catch(err => {
        setError(err)
      })
  }, [])

  return { data, error }
}

export default useFetch