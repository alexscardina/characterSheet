import React from "react"

function StatCard(props) {
    let statMod = props.mod
    let modFormatString = "neg-stat-mod"
    if (props.mod > 0) {
        statMod = "+" + props.mod
        modFormatString = "pos-stat-mod"
    } else {
        if (props.mod === 0) {
            modFormatString = "zero-stat-mod"
        }
    }
    let labelTexts = [ "dex-label", "con-label", "int-label", "wis-label", "cha-label" ]
    let labelString = labelTexts[props.id]
    return (
        <div>
            <div className="stat-label">
                <div className={labelString}>
                    {props.stat}
                </div>
            </div>
            <div className="stat-card">
                {props.score}
            </div>
            <div className={modFormatString}>
                {statMod}
            </div>
        </div>
    )

}

export default StatCard