gyms = Gym.create([
  {
    name: "New York Sports CLub",
    image_url: '/images/NYSC.png',
    description: "NYSC safe, spacious clubs will be open soon and ready to get you back on track to your peak fitness.
    Always look forward. Never look back. NYSC have one of the largest corporate wellness programs in America!  If you're interested in setting up a program for your company,We can also do it !" 
  },
  { 
    name: "Retro Fitness",
    image_url: '/images/retro.png',
    description: 'With more than 140 gyms open or under development across the United States, Retro Fitness is a growing gym franchise owned by small business owners in every community we serve.
Their GET REAL campaign emphasizes our hometown gym style practices of an owner who accompanies you through your health and fitness journey. Retro is proud to have the most active gym members in the industry.'
  },
  {
    name: "Planet Fitness",
    image_url: '/images/planet.png',
    description: 'No matter what you’re looking for in a gym, we’ve got a membership option made for you. All Planet Fitness members enjoy unlimited access to their home club and the support of our friendly, knowledgeable staff anytime you need it. PF Black Card® members receive additional benefits, including the ability to bring a guest for free and access to any of our 2,000+ PF locations.
    t’s our goal to provide a clean, safe, welcoming environment for anyone who walks through our door, and all the equipment, amenities and support you need once you’re here.'
  },
  {
    name: "Blink",
    image_url: '/images/blink.png',
    description: 'Hi, we’re Blink Fitness, and we believe that exercise isn’t just about how it makes you look, but also how it makes you feel.
    Blink is a motivating space with a staff of mood-lifters. We take pride in challenging fitness industry norms and celebrating every unique body.
    #EveryBodyHappy'
  },
  {
    name: "Equinox",
    image_url: '/images/equinox.png',
    description: 'Equinox is more than a place where high performers come to be their best. 
     We’ve transformed every aspect of our membership to encompass integrated digital and in-club offerings to keep you at your best—all the time, any time. 
     Discover the offerings below, plus The Equinox Standard for health, safety, and cleanliness.'
  },
  {
    name: "LA Fitness",
    image_url: '/images/lafitness.png',
    description: 'LA Fitness continues to increase its presence by focusing on the one lifelong benefit valued by everyone: good health.

    Founded in Southern California in 1984, LA Fitness continues to seek innovative ways to enhance the physical and emotional well-being of our increasingly diverse membership base. Today, our state-of-the-art clubs span the continent, and we’re still expanding. Our strong and successful growth stems from our commitment to understanding and meeting the distinct needs of each community we serve. With our wide range of amenities and a highly trained staff, we provide fun and effective workout options to family members of all ages and interests.'
  },
  {
    name:  "Crunch Fitness", 
    image_url: '/images/crunch.png',
    description: 'Some may call it a tagline, but for us, it’s a way of life. It’s our Monday-thru-every-day mantra. An unfiltered philosophy that drives us to create a community and a gym for all.
      No judgments means room for everyone, regardless of shape, size, age, race, gender or fitness level. No matter your workout of choice, we want you to feel good while reaching your goals. Join the fun.'
  },
  {
    name:  "24 Hour Fitness",
    image_url: '/images/24fitness.png',
    description: 'A little fit goes a long way, when you manage to fit in your workout. At 24 Hour Fitness, we’re here to provide the motivation you need to kick off the covers and kick into gear. We put opportunities and tools at your fingertips – such as studio and cycle classes, on-demand workouts, 24Life magazine and signature training programs – to get you started on the right track and keep you moving forward.
      Headquartered in San Ramon, Calif., we are a leading fitness industry pioneer with nearly four million members in more than 300 clubs across the U.S. For more than 30 years, we’ve held fast to our mission of helping people improve their lives through fitness. From small and large goals met inside our clubs to living better outside the club, we’re here to help you Do More with Your 24.™'
  },
  
  {
    name: "Gold's gym",
    image_url: '/images/gold.png',
    description: "
    As a member of Gold’s Gym, you’ll enjoy access to the best coaches, personal trainers, and group exercise instructors in the business. That means access to motivating and knowledgeable experts dedicated to your success. Whatever your goal or experience level, our wide range of fitness classes and offerings can help you reach your goals. And you’ll join a supportive community of members who share your aspirations. All of that adds up to an experience you won’t find anywhere else. To see group exercise classes, personal training offerings, GOLD'S STUDIO® programs & more, find a gym near you."
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
   }, 
  
   {
    title: 'Modern',
    description: 'Loved it',
    score: 5, 
    gym_id: 8
   } 
  
  
  
  ]) 











