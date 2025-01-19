import './App.css'
import { useMotionValue } from 'motion/react'
import { useEffect } from 'react'

const App = () => {
  const x = useMotionValue(0)

  useEffect(() => {
    const timeout = setTimeout(() => x.set(50), 1000)

    return () => clearTimeout(timeout)
  }, [])
  return <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">whoami</h1>
}

export default App
