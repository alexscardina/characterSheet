import React from 'react'
import {profBonus} from './ProficiencyBonus'

function PassiveWisdom(props) {
    let passiveWis = 10;
    let isProf = true
    if (isProf) {
        passiveWis += profBonus
    }
    passiveWis += props.wisMod
    return (
        <div>
            <div className="passive-perception">
                Passive Wisdom (Perception)
            </div>
            <div className="passive-perception-circle">
                {passiveWis}
            </div>
        </div>
    )
}

export default PassiveWisdom