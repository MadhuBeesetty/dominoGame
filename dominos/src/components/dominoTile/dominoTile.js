import {Tile, Dot} from './style';

export const DominoTile = ({value}) => {
return (
<div>
  <Tile>
   {([...Array(value)].map((dot,i) => <Dot id={dot} key={i}/>))}
  </Tile>
  </div>
  )
};
