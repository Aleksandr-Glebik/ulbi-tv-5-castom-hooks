import React, {useState} from "react"
import useDebounce from "./hooks/useDebounce";

function App() {

  const [value, setValue] = useState('')
  const debouncedSearch = useDebounce(search, 500)

  function search(query) {
    fetch(`https://jsonplaceholder.typicode.com/todos?query=${query}`)
        .then(response => response.json())
        .then(json => {
            console.log('json', json);
        })
  }

  const onChange = (e) => {
    // e.preventDefault()
    setValue(e.target.value)
    debouncedSearch(e.target.value)
  }

  return (
    <div>
      <input type={'text'} value={value} onChange={onChange} />
    </div>
  )
}

export default App
