import React from 'react'
import { GAME_STATE_PLAYING } from "../Constants";

function Footer({onClickEvent,onSuggestClick ,gamestate}) {
  return (
    <div className='panel footer'>
      {
        gamestate===GAME_STATE_PLAYING && 
<button onClick={onSuggestClick}>Suggest</button>      




      }
      {
        gamestate!==GAME_STATE_PLAYING &&
<button onClick={onClickEvent}>New Game</button>      

      }

    </div>
  )
}

export default Footer
