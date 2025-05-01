// Pest Data
const pestsData = {
    "Aphids": {
      description: "Tiny insects that feed on plant sap, causing stunted growth.",
      moreInfoLink: "aphids.html"
    },
    "Grasshoppers": {
      description: "Grasshoppers are large insects that feed on crops, causing leaf damage.",
      moreInfoLink: "grasshoppers.html"
    },
    "Mites": {
      description: "Mites are tiny, often invisible pests that feed on leaves, causing discoloration.",
      moreInfoLink: "mites.html"
    },
    "Caterpillars": {
      description: "Caterpillars are the larval stage of moths and butterflies, which feed on leaves.",
      moreInfoLink: "caterpillars.html"
    },
    "Whiteflies": {
      description: "Whiteflies are small flying insects that attack plant leaves, weakening the plant.",
      moreInfoLink: "whiteflies.html"
    }
  };
  
  // Function to handle search and display pest info
  document.getElementById('search-bar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const pestInfo = document.getElementById('pest-info');
    
    // Clear previous results
    pestInfo.innerHTML = '';
  
    // If the input is not empty
    if (query) {
      // Loop through pestsData and search for matching pest names
      for (let pest in pestsData) {
        if (pest.toLowerCase().includes(query)) {
          // Create pest card with description and a "More Info" button
          const pestCard = document.createElement('div');
          pestCard.classList.add('bg-white', 'rounded-xl', 'p-6', 'shadow-md', 'mb-4');
  
          const pestTitle = document.createElement('h3');
          pestTitle.classList.add('text-xl', 'font-semibold', 'mb-2');
          pestTitle.textContent = pest;
  
          const pestDescription = document.createElement('p');
          pestDescription.classList.add('text-gray-600');
          pestDescription.textContent = pestsData[pest].description;
  
          const moreInfoButton = document.createElement('a');
          moreInfoButton.classList.add('mt-2', 'text-blue-500', 'hover:underline');
          moreInfoButton.textContent = 'More Info';
          moreInfoButton.href = pestsData[pest].moreInfoLink;  // Link to detailed page
  
          pestCard.appendChild(pestTitle);
          pestCard.appendChild(pestDescription);
          pestCard.appendChild(moreInfoButton);
          pestInfo.appendChild(pestCard);
        }
      }
    }
  });
  