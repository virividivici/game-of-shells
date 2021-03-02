import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ShellsFinder from '../ShellsFinder'
import styles from './index.module.scss'



const ShellGame = ({cups}) => {
  const [ answer, setAnswer ] = useState(Math.floor(Math.random() * cups.length))
  const [ guess, setGuess ] = useState(false)
  const [ shuffle, setShuffle ] = useState(false)
  const [ positions, setPositions] = useState([
      { x: 0, y: 100},
      { x: 80, y: 100},
      { x: 160, y: 100 }
  ]);
 

  function generateNewPositions() {
  
    function generateNewPosition(position) {
      position.x = Math.floor(Math.random() * (700 - 80));
      position.y = 100
      return position;
    }

    function isShellOverlap(acc, newPos) {
      return acc.some(({ x }) => {
        const overlapX = (newPos.x >= x - 80) && (newPos.x <= x + 80);
        return overlapX;
      });
    }
    
    const newPositions = positions
      .reduce((acc, cur) => {
        const shell = Object.assign({}, cur);
        let newPos = generateNewPosition(shell);

        while(isShellOverlap(acc, newPos)) {
          newPos = generateNewPosition(shell);
        }

        acc.push(newPos);
        return acc;
      }, []);

    return newPositions;
  }

  const animations = [ 'shuffle3' , 'shuffle2' , 'shuffle1']
  
  function playGame() {
    setShuffle(false)
    let ans = Math.floor(Math.random() * cups.length)
    setAnswer(ans)
    setGuess(ans)
    setInterval(() => {
        console.log('Interval triggered');
        setGuess(false)
      }, 500);
      setShuffle(true)  
      setPositions(generateNewPositions());
  }

  function reveal(i) {
    setGuess(i)
    //setShuffle(false) 
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
                <span>?</span>
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
