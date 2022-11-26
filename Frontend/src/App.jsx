import { useState } from 'react'

import Register from './screens/Auth/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Register/>
        
    </div>
  )
}

export default App
