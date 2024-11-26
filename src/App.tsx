import './App.css'
import { motion, useMotionValue } from 'motion/react'
import { useEffect } from 'react'

const App = () => {
  const x = useMotionValue(0)

  useEffect(() => {
    const timeout = setTimeout(() => x.set(50), 1000)

    return () => clearTimeout(timeout)
  }, [])
  return (
    <motion.div
      animate={{ x: x.get() }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        type: 'spring',
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      <p>Hello!</p>
    </motion.div>
  )
}

export default App
