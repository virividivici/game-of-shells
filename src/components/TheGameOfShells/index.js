import React, { useState } from 'react'
import styles from './index.module.scss'


const TheGameOfShells = ({}) => {
  const [answer, setAnswer] = useState(null);
  const [guess, setGuess] = useState(null);
  const [postions, setPostions] = useState([
    [
      { x: 140, hasShell: false },
      { x: 280, hasShell: false },
      { x: 420, hasShell: false },
    ]
  ]);
  
  const shuffleCounter = () =>  postions.length - 1
  let transCounter = 0

  const playGame = () => {
    transCounter = 0
    const cups = postions[postions.length - 1]
    console.log('cups: ', cups)
    const ans = Math.floor(Math.random() * cups.length)
    const newShells = cups.map((cup, index) => {
      const aCup = Object.assign({}, cup);
      aCup.hasShell = index === ans
      setAnswer(ans)
      return aCup
    });

    setPostions([newShells])
    setGuess(null)
  }

  function endTransition() {
    transCounter++
    if (transCounter % 3 === 0) {
      shuffleCups()
    }
  }
  
  const checkPosition = (acc, newPos) => {
    return acc.some(({ x }) => {
      const overlapX = (newPos.x >= x - 140) && (newPos.x <= x + 140)
      return overlapX;
    });
  }

  const shufflePosition = (acc, pos) => {
    pos.x = Math.floor(Math.random() * (1100))
    while(checkPosition(acc, pos)) {
      pos.x = Math.floor(Math.random() * (1100))
    }
    return pos
  }

  function createShuffle() {
    const newPositions = postions[postions.length - 1]
      .reduce((acc, current) => {
        const pos = Object.assign({}, current)
        let newPos = shufflePosition(acc , pos)
        acc.push(newPos)
        return acc
      }, [])

    return newPositions
  }

  const shuffleOnce = (cups) => {
    const allPos = cups.map(({ x }) => x)
    const finalSets = cups.map(cup => {
      const rand = Math.floor(Math.random() * allPos.length)
      cup.x = allPos[rand]
      allPos.splice(rand, 1)
      return cup
    });

    return finalSets
  }


  function shuffleCups() {
    
    if (shuffleCounter() === 6) {
      return
    }

    const newShellPositions = shuffleCounter() === 5
                              ? shuffleOnce(postions[0])
                              : createShuffle()

    setPostions(postions.concat([newShellPositions]))
  }

  

  const Shell = (index) => {
    return (
    <span
      className={
        `${styles.shell}  
        ${(guess && answer ===  guess )? styles.win: '' } 
        ${(postions.length === 1 && postions[0].some(cup => cup.hasShell))? styles.show: ''}
        `}
      onAnimationEnd={shuffleCups}>
       🐚
    </span>
    )}

  const cupsDisplay = postions[postions.length - 1]
    .map((cup, i) =>
      <button
        key={i}
        className={styles.cup}
        style={{transform: `translate(${cup.x}px, 100px)`}}
        onClick={() => setGuess(i)}
        onTransitionEnd={endTransition} >
        { cup.hasShell && <Shell index={i} /> }
      </button>
    );
  

  const msg = () => {
   
    if(!guess  && !answer) {
        return 'Play press to start'
    } else {
      if( guess === answer){
        return 'You won!'
      } else {
        return 'Try again'
      }
    }
  }  
  return (
    <>
        <button
          className={styles.playBtn}
          onClick={playGame} >
          Play
        </button>    
        <h2>
         {msg()}
        </h2>
        <div className={styles.screen}>
          {cupsDisplay}
        </div>
      </>
  )
}

export default TheGameOfShells

