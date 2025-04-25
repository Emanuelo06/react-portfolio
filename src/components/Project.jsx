import React from 'react';

const Project = ({ imgUrl, title, description, projectUrl, skills }) => {
  return (
    <div className="w-full bg-[#3d3d3d] rounded-[8px] p-4 mb-4 flex flex-col sm:flex-row">
      {/* Image */}
      <img
        src={imgUrl}
        alt="project image"
        className="sm:w-[150px] md:w-[200px]  rounded-[8px] cursor-pointer mb-4 sm:mb-0 sm:mr-4 self-center"
      />

      {/* Text content */}
      <div className="flex flex-col justify-start">
        <h1 className="text-lg md:text-2xl text-white underline mb-2">
          <a href={projectUrl} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h1>
        <p className="text-md md:text-[17px] text-white mb-2">{description}</p>
        
        {/* Skills */}
        <div className="flex flex-wrap">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-[#1f1f1f] text-white text-xs md:text-sm px-3 py-1 rounded-full mr-2 mb-2"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;