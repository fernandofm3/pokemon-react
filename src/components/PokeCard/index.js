import React from 'react';
import * as S from './styles';

function PokeCard (props) {
    return (        
        <S.PokeCard> 
            <img src={props.img} />                    
            <p className='pokeNum'>N° {props.id}</p>
            <p className='pokeName'>{props.name}</p>
            <div className='divPokeTypes'>
                {
                    props.types.map(t => <span key={t.type.name}>{t.type.name}</span>)
                }
                
            </div>    
        </S.PokeCard>            
    )
}

export default PokeCard;