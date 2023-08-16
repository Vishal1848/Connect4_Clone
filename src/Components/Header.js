import React from 'react'
import { GAME_STATE_PLAYING ,GAME_STATE_DRAW,NO_PLAYER,PLAYER_1,NO_CIRCLE, GAME_STATE_WIN} from "../Constants";




const Header=({gamestate,currentPlayer,winPlayer}) => {


  const renderLabel= ()=>{
    switch(gamestate){
      case GAME_STATE_PLAYING:
        return <div>Player {currentPlayer} Turn </div> 
        case GAME_STATE_WIN:
       return <div> Player {winPlayer} Wins</div>
       case GAME_STATE_DRAW:
        return <div> Game is a Draw</div>
       default:
    }
  }
  return (
    <div className='panel header'>
        <div className='header-text'> {renderLabel()}</div>
      
    </div>
  )
}

export default Header
