import React, { Component } from 'react'
import './App.css'
import StrengthCard from './components/StrengthCard'
import StatCard from './components/StatCard'
import CharacterInfo from './components/CharacterInfo'
import ProficiencyBonus from './components/ProficiencyBonus'
import SkillsCard from './components/SkillsCard'

function App() {
  return (
    <div>
      <CharacterInfo />
      <ProficiencyBonus />
      <SkillsCard />
      <StrengthCard score="17"/>
      <StatCard stat="Dexterity" score="13"/>
      <StatCard stat="Constitution" score="16"/>
      <StatCard stat="Intelligence" score="8"/>
      <StatCard stat="Wisdom" score="12"/>
      <StatCard stat="Charisma" score="11"/>
    </div>
  );
}

export default App;
