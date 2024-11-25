import './App.css'
import { motion } from 'motion/react'

const App = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      <div className="work-in-progress-container">
        <div className="animation-wrapper">
          {'Coming Soon'.split('').map((char, index) => (
            <span key={index} className={`letter ${char === ' ' ? 'space' : ''}`}>
              {char}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default App
