import React, { useState } from "react";
import GameCircle from "./GameCircle";
import "../Game.css"
import Header from "./Header";
import Footer from "./Footer";
import { iSDraw, isWinner ,getComputerMove} from "./helper";
import { useEffect } from "react";
import { GAME_STATE_PLAYING ,NO_PLAYER,PLAYER_1,PLAYER_2, NO_CIRCLE, GAME_STATE_WIN, GAME_STATE_DRAW} from "../Constants";

const GameBoard = ()=>{
    const [gameBoard,setGameBoard]=useState(Array(NO_CIRCLE).fill(NO_PLAYER))
    const [currentPlayer,setcurrentPlayer]=useState(PLAYER_1)
    const [gamestate,setGameState]=useState(GAME_STATE_PLAYING)
    const[winPlayer,setWinPlayer]=useState(NO_PLAYER);
    
useEffect(()=>{
    initGame()
},[])

    const initGame=()=>{
        setcurrentPlayer(PLAYER_1)

        setGameBoard(Array(NO_CIRCLE).fill(NO_PLAYER))
        setGameState(GAME_STATE_PLAYING)
    }
    const initBoard=()=>{
        const circles=[]
        for(let i=0;i<NO_CIRCLE;i++){
            circles.push(renderCircle(i))
        }
        return circles
    };
    const suggestMove=()=>{
        clickCircle(getComputerMove(gameBoard))
    }

    const clickCircle = (id)=>{

        
       console.log('clicked circle ' + id)
       if(gameBoard[id]!==NO_PLAYER)return;
       if(gamestate!==GAME_STATE_PLAYING)return
       if(isWinner(gameBoard, id,currentPlayer)){
   setGameState(GAME_STATE_WIN)
   setWinPlayer(currentPlayer)
    }

    if(iSDraw(gameBoard, id,currentPlayer)){
        setGameState(GAME_STATE_DRAW)
        setWinPlayer(NO_PLAYER)
         }
       setGameBoard(prev =>{
       return prev.map((circles,pos)=>{
        if(pos===id)return currentPlayer;
        return circles
       })
    })
       
       setcurrentPlayer(currentPlayer===PLAYER_1?PLAYER_2:PLAYER_1)
    }


    const renderCircle=id=>{
      return <GameCircle id={id} key={id} className={`player_${gameBoard[id]}`} onCircleClicked ={clickCircle}/>
    
    }
return(
    <>
   <Header gamestate={gamestate} currentPlayer={currentPlayer} winPlayer={winPlayer}/>
 <div className="gameBoard">
 {initBoard()}

 </div>
 <Footer onClickEvent={initGame} onSuggestClick={suggestMove} gamestate={gamestate}/>
 </>
 )
}
export default GameBoard;