import React from 'react'
import {level} from './CharacterInfo'

export let profBonus = 2
if (5 <= level && level <= 8) {
    profBonus = 3
}
else if (9 <= level && level <= 12) {
    profBonus = 4
}
else if (13 <= level && level <= 16) {
    profBonus = 5
}
else if (17 <= level && level <= 20) {
    profBonus = 6
}

function ProficiencyBonus() {
    return (
        <div>   
            <div className="prof-bonus-rectangle">
                Proficiency Bonus
            </div>
            <div className="prof-bonus-circle">
                +{profBonus}
            </div> 
        </div>    
    )
}

export default ProficiencyBonus
