import React from 'react'
import Project from './Project'
import MyPokemon from '../assets/pokemon.jpg'
import MyTodo from '../assets/todo.jpg'

const Projects = () => {
   const pokemonUrl = "https://emanuelo06.github.io/pokemon-finder/";
   const todoUrl = "https://react-todo-tan-five.vercel.app";
   const pokemonDescription = "This is a vanilla JavaScript project using API's";
   const todoDescription = "This is a simple React project, it uses prop lifting and components";
    const pokemonSkills = ["JavaScript", "Bootstrap", "Html", "Css"]
    const todoSkills = ["React.js", "JavaScript", "Tailwind", "Html", "Css"];
  return (
   <div className='bg-[#1f1f1f]  w-full h-fit relative z-10 mt-4 rounded-[8px] p-5' id='projects'>
      <h1 className='text-sm md:text-[18px] font-[600] text-white mb-2'>//PROJECTS</h1>
      <Project imgUrl={MyPokemon} title="Pokemon Finder" description={pokemonDescription} projectUrl={pokemonUrl} skills={pokemonSkills}/>
      <Project imgUrl={MyTodo} title="Todo List" description={todoDescription} projectUrl={todoUrl} skills={todoSkills}/>
   </div>
  )
}

export default Projects