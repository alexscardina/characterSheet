import React from 'react'

export let level = 2;

class CharacterInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            class: "",
            level: 1
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    render() {
        return (
            <div>
                <div className="info-card">
                    <form>
                        <label>
                            Class:
                            <select 
                                name="class" 
                                onChange={this.handleChange} 
                                value={this.state.class}
                            >
                                <option value="Barbarian">Barbarian</option>
                                <option value="Bard">Bard</option>
                                <option value="Cleric">Cleric</option>
                                <option value="Druid">Druid</option>
                                <option value="Fighter">Fighter</option>
                                <option value="Monk">Monk</option>
                                <option value="Paladin">Paladin</option>
                                <option value="Ranger">Ranger</option>
                                <option value="Rogue">Rogue</option>
                                <option value="Sorcerer">Sorcerer</option>
                                <option value="Warlock">Warlock</option>
                                <option value="Wizard">Wizard</option>
                            </select> 
                        </label>
                    </form>
                    <div>
                        {this.state.class}
                    </div>
                </div>
                <div className="name-card">
                    <form>
                        <label>

                        </label>
                    </form>
                </div>
        </div>
        )
    }
}


export default CharacterInfo