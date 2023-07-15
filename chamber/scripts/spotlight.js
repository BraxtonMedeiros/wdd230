function displayCompanySpotlights(data) {
    const spotlightContainer = document.querySelector('.spotlights');
  
    // Clear previous spotlight data
    spotlightContainer.innerHTML = '';
  
    // Filter businesses with membership levels Silver or Gold
    const spotlights = data.businesses.filter(business => business.membership === 'Silver' || business.membership === 'Gold');
  
    // Generate spotlight elements
    spotlights.forEach(spotlight => {
      const spotlightItem = document.createElement('div');
      spotlightItem.classList.add('spotlight');
  
      const imageElement = document.createElement('img');
      imageElement.src = spotlight.image;
      imageElement.alt = spotlight.name;
      spotlightItem.appendChild(imageElement);
  
      const nameElement = document.createElement('p');
      nameElement.textContent = spotlight.name;
      spotlightItem.appendChild(nameElement);
  
      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = spotlight.description;
      spotlightItem.appendChild(descriptionElement);
  
      const linkElement = document.createElement('a');
      linkElement.href = spotlight.website;
      linkElement.textContent = 'Learn More';
      spotlightItem.appendChild(linkElement);
  
      spotlightContainer.appendChild(spotlightItem);
    });
  }
  
  fetch('data/members.json')
    .then(response => response.json())
    .then(data => displayCompanySpotlights(data))
    .catch(error => console.log(error));
