import React from 'react'

function ArmorClass(props) {
    let AC = 10
    AC += props.dexMod
    return(
        <div className="initiative">
            {AC}
        </div>
    )
}

export default ArmorClass