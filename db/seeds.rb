gyms = Gym.create([
  {
    name: "New York Sports CLub",
    image_url: '/images/NYSC.png'
  },
  { 
    name: "Retro Fitness",
    image_url: '/images/retro.png'
  },
  {
    name: "Planet Fitness",
    image_url: '/images/planet.png'
  },
  {
    name: "Blink",
    image_url: '/images/blink.png'
  },
  {
    name: "Equinox",
    image_url: '/images/equinox.png'
  },
  {
    name: "LA Fitness",
    image_url: '/images/lafitness.png'
  },
  {
    name:  "Crunch Fitness", 
    image_url: '/images/crunch.png'
  },
  {
    name:  "24 Hour Fitness",
    image_url: '/images/24fitness.png'
  },
  
  {
    name: "Gold's gym",
    image_url: '/images/gold.png'
  }
  


])


reviews = Review.create([ 
  { 
    title: 'Outstanding Gym' ,
    description: 'Loved the location and the new equipment' ,   
    score: 5, 
    gym: gyms.first
  },
  {
    title: 'Not what I expected',
    description: 'Rude Staff and old equipment',
    score: 1, 
    gym: gyms.first
   } 
  ]) 











