import React from 'react'
import './App.css'
import CharacterInfo from './components/CharacterInfo'
import ProficiencyBonus from './components/ProficiencyBonus'
import SkillsCard from './components/SkillsCard'
import SavingThrows from './components/SavingThrows'
import Stats from './components/Stats'

function App() {
  return (
    <div>
      <CharacterInfo />
      <ProficiencyBonus />
      <SavingThrows />
      <SkillsCard />
      <Stats 
        str = "10"
        dex = "13"
        con = "15"
        int = "9"
        wis = "16"
        cha = "19"
      />
    </div>
  );
}

export default App;
