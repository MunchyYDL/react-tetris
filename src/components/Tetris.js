import React, { useState } from 'react'
import { usePlayer } from '../hooks/usePlayer'

// Custom Hooks
import { useStage } from '../hooks/useStage'

// Components
import Display from './Display'
import Stage from './Stage'
import StartButton from './StartButton'

// Styled Components
import { StyledTetris, StyledTetrisWrapper } from './styles/StyledTetris'

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null)
  const [gameOver, setGameOver] = useState(false)

  const [player] = usePlayer()
  const [stage, setStage] = useStage(player)

  console.log('re-render')

  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </div>
          )}
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
}
export default Tetris
