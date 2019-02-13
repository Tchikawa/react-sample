import React from 'react';
import PropTypes from 'prop-types'; 
import {Cat, Backpack, Ghost, IceCream, Mug} from 'react-kawaii'

const ChangeCharacter = ({character, changeCharacter})=>{
  return (
    <div className='React-kawaii'>
      {shapeCharacter(character)}
        <select name={character} onChange={changeCharacter}>
          <option value='cat'>CAT</option> 
          <option value='icecream'>ICECREAM</option>
          <option value='backpack'>BACKPACK</option> 
          <option value='ghost'>GHOST</option> 
          <option value='mug'>MUG</option> 
       </select>
    </div>  
  )
}

  const shapeCharacter = (character) => {
    switch(character){
      case 'cat':
        return <Cat size={200} mood="excited" color="#596881" />
      case 'backpack':
        return <Backpack size={200} mood="excited" color="#FFD882" />
      case 'ghost':
        return <Ghost size={200} mood="blissful" color="#E0E4E8" />
      case 'icecream':
        return <IceCream size={200} mood="blissful" color="#FDA7DC" />
      case 'mug':
        return <Mug size={200} mood="happy" color="#A6E191" />
      default:
        return ''
    }
  }
ChangeCharacter.propTypes = {
  character: PropTypes.string.isRequired,
  changeCharacter: PropTypes.func.isRequired,
}

export default ChangeCharacter