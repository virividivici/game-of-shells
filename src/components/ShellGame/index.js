import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

const delay = async (ms) => new Promise(res => setTimeout(res, ms));
const wait = (ms) => {
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

const ShellGame = ({cups}) => {
  const [ answer, setAnswer ] = useState(Math.floor(Math.random() * cups.length))
  const [ guess, setGuess ] = useState(false)
  const [ shuffle, setShuffle ] = useState(false)
  const [ msg, setMsg ] = useState('Press play to start')
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
  
  

  const playGame = () => {
    setShuffle(false)
    let ans = Math.floor(Math.random() * cups.length)
    setAnswer(ans)
    setGuess(ans)
   // wait(1000)
    
    reShuffle()
      
  }

  const reShuffle = () => {
    setGuess(false)
    setShuffle(true)  
    setPositions(generateNewPositions());
  }

  function reveal(i) {  
    setGuess(i)
    if(guess === i && answer === i) {
        setMsg('You wont!')
    } else {
        setMsg('Try again')
    }
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
             <span> 🐚</span>
             :
             (
                guess === index ?
                <span>🦀</span>
                :
                <span>{'?'}</span>
             )
            }
        </div>
    );

  
  return (
    <>
     <h1>The Games of Shells</h1>
     <h2>{msg}</h2>
     <button className={styles.playBtn}  onClick={playGame}>Play</button>
     {cupDisplay}
    </>
  )
}

export default ShellGame

ShellGame.defaultProps = {
    cups: ["A", "B", "C"]
}

ShellGame.propTypes = {
    cups: PropTypes.array
}

