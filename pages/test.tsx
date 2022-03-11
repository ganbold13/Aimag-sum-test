import { useState, useEffect } from 'react'

function test() {
  const [a, setA] = useState('')
  const [b, setB] = useState(false)

  useEffect(() => {
    console.log('a state uurchlogdluu')
  }, [a])

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="test m-2 flex w-1/2 flex-row justify-between">
        <button onClick={() => setA('posts')}>Posts</button>
        <button onClick={() => setA('users')}>Users</button>
        <button onClick={() => setA('comments')}>Comments</button>
        <button onClick={() => setB(true)}>True</button>
        <button onClick={() => setB(false)}>False</button>
      </div>
      <h1 className=" m-4 text-7xl">{a}</h1>
    </div>
  )
}

export default test
