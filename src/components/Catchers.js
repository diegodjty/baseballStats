import React from 'react';
import {avatar} from '../img'
import PlayerContainer from './layout/PlayerContainer';

const Catchers = ({player}) => {
    return (
        <PlayerContainer>
           <div className="bar">Catchers</div>
           <div className="player-info">
               <div className="icon">
                   <img src={avatar} alt=""/>
               </div>
               <div className="info">
                    <p>{player.name}{' '}{player.lastname}</p>
                    <p>#{player.number}</p>
                    <p>B/T: {player.bats}{player.catchs}</p>
               </div>
           </div>
        </PlayerContainer>
    );
};

export default Catchers;