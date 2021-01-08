import React from "react"

function StrengthCard(props) {
    let statMod
    let mod = ~~((props.score - 10) / 2)
    if (props.score < 10 && props.score % 2 !== 0) {
        mod -= 1
    }
    if (mod > 0) {
        statMod = "+" + mod
        return (
            <div>
                <div className="strength-label">
                    Strength
                </div>
                <div className="stat-card">
                    {props.score}
                </div>
                <div className="pos-stat-mod">
                    {statMod}
                </div>
            </div>
        )
    }
    else {
        statMod = mod
        if (mod === 0) {
            return (
                <div>
                    <div className="strength-label">
                        Strength
                    </div>
                    <div className="stat-card">
                        {props.score}
                    </div>
                    <div className="zero-stat-mod">
                        {statMod}
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <div className="strength-label">
                        Strength
                    </div>
                    <div className="stat-card">
                        {props.score}
                    </div>
                    <div className="neg-stat-mod">
                        {statMod}
                    </div>
                </div>
            )
        }
    }
    
}

export default StrengthCard