import {DominoTile} from '../dominoTile/dominoTile';
import { ParentTile, MidTile } from './style';
import {useState} from 'react';

export const GenerateButton = () =>{

const [firstTileValue, updateFirstTileValue] = useState(0);
const [secondTileValue, updateSecondTileValue] = useState(0);

const updateValues = () => {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  updateFirstTileValue(getRandomIntInclusive(1,6));
  updateSecondTileValue(getRandomIntInclusive(1,6));
}


 return (<>
 <button onClick={updateValues}>generate</button>
 <ParentTile>
 <DominoTile value={firstTileValue} />
 <MidTile />
 <DominoTile value={secondTileValue} />
 </ParentTile>
 </>)
};
