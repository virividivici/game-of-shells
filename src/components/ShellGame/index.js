import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ShellsFinder from '../ShellsFinder'
import styles from './index.module.scss'



const ShellGame = ({cups}) => {
  const [ answer, setAnswer ] = useState(Math.floor(Math.random() * cups.length))
  const [ guess, setGuess ] = useState(false)
  const [ shuffle, setShuffle ] = useState(false)
  const [ positions, setPositions] = useState([
      { x: 450, y: 100},
      { x: -300, y: 100},
      { x: -250, y: 100 },
  ]);
 

   

  const animations = [ 'shuffle1' , 'shuffle2' , 'shuffle3']
  
  function playGame() {
    setShuffle(false)
    let ans = Math.floor(Math.random() * cups.length)
    setAnswer(ans)
    setGuess(ans)
    setInterval(() => {
        console.log('Interval triggered');
        setGuess(false)
        setShuffle(true)
    
      }, 2000);
  }

  function reveal(i) {
    setGuess(i)
  }
 

  const cupDisplay = cups
    .map((cup, index) => 
  
        <div
            role="button"
            key={index}
            className={`${styles.cup} ${shuffle && styles[animations[index]]}`}
            style={{transform: `translate(${positions[index].x}px, ${positions[index].y}px)`}}
            onClick={() => reveal(index)}
            >
            {(guess === index && answer === index ) ? 
             <span> 🐚 </span>
             :
             (
                guess === index ?
                <span>🦀</span>
                :
                <span>{cup} {positions[index].x}</span>
             )
            }
        </div>
    );

  
  return (
    <div className={styles.container}>
     <h1>The Games of Shells</h1>
    
     <button className={styles.playBtn}  onClick={playGame}>Play</button>

     {cupDisplay}

     <ShellsFinder />
    </div>
  )
}

export default ShellGame

ShellGame.defaultProps = {
    cups: ["A", "B", "C"]
}

ShellGame.propTypes = {
    cups: PropTypes.array
}
