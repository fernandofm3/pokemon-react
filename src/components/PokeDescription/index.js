import React from "react";
import * as S from "./styles";

function PokeDescription (props) {

    //Recuperando os valores dos Genders em porcentagem com uma base máxima de 8 para ser Female. Conta usada regra de 3.
    function findValueGenderInPercentage (value) {
        let result = (value * 100) / 8;        
        return result; 
    }

    return (
        <S.PokeDescription>
            <h6>Description</h6>
            <p>{props.description}</p>

            {
                
                props.gender === -1 ?
                <div className="div-gender">               
                        <div className="div-gender-percentage">                    
                            <div>                                
                                <p>Genderless</p>
                            </div>                                     
                        </div>                    
                    </div>                
                : <div className="div-gender">               
                        <div className="div-gender-percentage">                    
                            <div>
                                <i class="bi bi-gender-female"></i>
                                <p>Female {findValueGenderInPercentage (props.gender)}%</p>
                            </div>
                            <div>
                                <i class="bi bi-gender-male"></i>
                                <p>Male {findValueGenderInPercentage (8 - props.gender)}%</p>
                            </div>                   
                        </div>                    
                    </div> 
            }
            
            
        </S.PokeDescription>
    )
}

export default PokeDescription;