import React from 'react'

export const ProjectCard = (  {projectData}: {projectData:any}  ) => {
    const { Title, description, github, website, name } = projectData
    

    return (
        <div className={name + ` grid-item`} >
            <div className="project-name">
                <h3>{Title}</h3>
                <span>{description}</span>
            </div>
            <div className="grid-buttons">
                    <a href={github}>github</a>

                    <a href={website}>website</a>
            </div>

        </div>
    )
}
