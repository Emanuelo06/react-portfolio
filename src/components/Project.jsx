import React from 'react'


const Project = ({imgUrl, title, description, projectUrl, skills}) => {
  return (
    <div className='w-full bg-[#3d3d3d] rounded-[8px] p-4 mb-4 flex  '>
      <img src={imgUrl} alt="project image" 
      className='w-[150px] md:w-[200px] rounded-[8px] cursor-pointer'/>
      <div className='h-full self-start self-row'>
         <h1 className='text-lg md:text-2xl text-white ml-2 underline'><a href={projectUrl} target='blank'>{title}</a></h1>
         <p className='text-md md:text-[17px] text-white ml-2 md:mb-3 '><a href="https://react-todo-tan-five.vercel.app" target='blank'></a>{description}</p>
         {skills.map((skill, index) => (
             <span
             key={index}
             className='bg-[#1f1f1f] text-white text-xs md:text-[16px] px-3 py-1 rounded-full align-bottom ml-2'
           >
             {skill}
           </span>
         ))}
      </div>
      
      

    </div>
  )
}

export default Project