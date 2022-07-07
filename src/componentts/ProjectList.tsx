import React from 'react'
import { ProjectCard } from './ProjectCard'

export const ProjectList = () => {

    const projectData = [
        {
            Title: "Run Buddy",
            description: "Simple web design for a fitness center offering multiple services",
            github: "https://github.com/cruzma/run-buddy.git",
            website: "https://cruzma.github.io/run-buddy/",
            name: 'run-buddy'
        },
        {
            Title: "Poke Parte",
            description: "Front End design using Pokemon API and Weather API to display pokemons",
            github: "https://github.com/damn-ma-6/Poke-Parte.git",
            website: "https://damn-ma-6.github.io/Poke-Parte/",
            name: 'poke-parte'
        },
        {
            Title: "Love Lorena",
            description: "A website for a wedding planner that features there services and positive reviews",
            github: "https://github.com/cruzma/misa-wedding-site",
            website: "https://cruzma.github.io/misa-wedding-site/",
            name: 'love-lorena'
        },
        {
            Title: "Weather Dashboard",
            description: "Using a a third-party API this weather dashboard will run in the browser and feature dynamically updated HTML and CSS",
            github: "https://github.com/cruzma/weather-dashboard.git",
            website: "https://cruzma.github.io/weather-dashboard/",
            name: 'weather-dash'
        },
        {
            Title: "Token Train",
            description: "A news aggregator type app built with React.js that utilizes data from REST API's",
            github: "https://github.com/chingu-voyages/v36-geckos-team-07",
            website: "https://tokentrain.netlify.app/",
            name: 'token-train'
        },
        {
            Title: "Dwindle",
            description: "A Job board that helps it's users dwindle down their student loan debt",
            github: "https://github.com/chingu-voyages/v39-geckos-team-05",
            website: "https://cheery-hamster-3c8aba.netlify.app/",
            name: 'dwindle'
        },
    ]

  return (
    <div className='grid-container'>
        {projectData.map((data, key) => {
            return(<ProjectCard key={key} projectData={data} />)
        })}
    </div>
  )
}
