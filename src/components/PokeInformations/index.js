import React from "react";
import * as S from "./styles";

function PokeInformations (props) {
    return (
        <S.PokeInformations>           
            <h6>Informations</h6>
            
            <table>                
                <tbody>
                    <tr>
                        <td className="td-title">
                            <i className="bi bi-circle-square"></i>
                            &nbsp; Species
                        </td>
                        <td>{props.species}</td>                        
                    </tr>                               
                    <tr>
                        <td className="td-title">
                            <i className="bi bi-hourglass-split"></i>
                            &nbsp; Base Exp
                        </td>
                        <td>{props.xp}</td>                        
                    </tr>                               
                    <tr>
                        <td className="td-title">
                            <i className="bi bi-arrow-up"></i>
                            &nbsp; Height
                        </td>
                        <td>{props.height} m</td>                        
                    </tr>                               
                    <tr>
                        <td className="td-title">
                            <i className="bi bi-boxes"></i>
                            &nbsp; Weight
                        </td>                       
                        <td>{props.weight} kg</td>
                    </tr>                                      
                    <tr>  
                        <td className="td-title">
                            <i className="bi bi-lightbulb-fill"></i>
                            &nbsp; Abilities
                        </td>                      
                        <td>{props.abilities}</td>
                    </tr> 
                    <tr>
                        <td className="td-title">
                            <i className="bi bi-image-alt"></i>
                            &nbsp; Habitat
                        </td>                        
                        <td>{props.habitat}</td>
                    </tr>                                 
                </tbody>
            </table>
                                
        </S.PokeInformations>
    )
}

export default PokeInformations;