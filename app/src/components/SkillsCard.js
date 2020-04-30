import React from 'react'
import {profBonus} from './ProficiencyBonus'

let prof = profBonus

export class Skill {
    constructor(stat, isProf) {
        this.stat = stat;
        this.isProf = isProf;
    }
}

function SkillsCard(props) {
    return (
        <div>
            <div className="skills">
                
            </div>
        </div>
    )
}

export default SkillsCard