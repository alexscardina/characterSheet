import React from 'react'
import StrengthCard from './StrengthCard'
import StatCard from './StatCard'
import PassiveWisdom from './PassiveWisdom'
import calculateMod from './calculateMod'
import ArmorClass from './ArmorClass'

class Stats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            str: this.props.str,
            dex: this.props.dex,
            con: this.props.con,
            int: this.props.int,
            wis: this.props.wis,
            cha: this.props.cha,
            strMod: calculateMod(this.props.str),
            dexMod: calculateMod(this.props.dex),
            conMod: calculateMod(this.props.con),
            intMod: calculateMod(this.props.int),
            wisMod: calculateMod(this.props.wis),
            chaMod: calculateMod(this.props.cha),
        };
    }

    render() {
        return (
            <div>
                <div>
                    <ArmorClass dexMod={this.state.dexMod}/>
                    <StrengthCard score={this.state.str}/>
                    <StatCard stat="Dexterity" score={this.state.dex} id="0" mod={this.state.dexMod}/>
                    <StatCard stat="Constitution" score={this.state.con} id="1" mod={this.state.conMod}/>
                    <StatCard stat="Intelligence" score={this.state.int} id="2" mod={this.state.intMod}/>
                    <StatCard stat="Wisdom" score={this.state.wis} id="3" mod={this.state.wisMod}/>
                    <StatCard stat="Charisma" score={this.state.cha} id="4" mod={this.state.chaMod}/>
                    <PassiveWisdom wisMod={this.state.wisMod}/>
                </div>
            </div>
        )
    }
}

export default Stats