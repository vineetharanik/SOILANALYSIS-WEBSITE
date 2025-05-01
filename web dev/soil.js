document.addEventListener('DOMContentLoaded', function () {
    const analyzeBtn = document.getElementById('analyzeBtn');
    const resultDiv = document.getElementById('result');
    const cropButtonsDiv = document.getElementById('cropButtons');
    const buttonsContainer = document.getElementById('buttonsContainer');
    const cropInfoDiv = document.getElementById('cropInfo');
  
    // Crop data for each soil type
    const cropsInfo = {
      black: {
        message: "🌱 Best Crops: Cotton, Soybean, Sorghum, Millets, Sunflower.",
        crops: {
          Cotton: "Cotton thrives in black soil and requires warm temperatures and plenty of sunlight.",
          Soybean: "Soybean grows well in black soil with proper drainage and moderate rainfall.",
          Sorghum: "Sorghum is ideal for black soil as it is drought-resistant and grows in hot climates.",
          Millets: "Millets are well-suited for black soil, especially in semi-arid areas.",
          Sunflower: "Sunflower grows best in well-drained black soil with plenty of sunlight."
        }
      },
      red: {
        message: "🌿 Best Crops: Groundnut, Millets, Pulses, Cotton.",
        crops: {
          Groundnut: "Groundnut is well-suited for red soil with moderate rainfall and sunlight.",
          Millets: "Millets thrive in red soil with low fertility and require minimal water.",
          Pulses: "Pulses like red soil because they can grow in slightly acidic conditions.",
          
        }
      },
      alluvial: {
        message: "🍚 Best Crops: Rice, Wheat, Sugarcane, Jute.",
        crops: {
          Rice: "Rice grows excellently in alluvial soil, especially in regions with ample water supply.",
          Wheat: "Wheat thrives in alluvial soil, which is rich in nutrients and perfect for its growth.",
          Sugarcane: "Sugarcane needs alluvial soil for high yields and moisture retention.",
          Jute: "Jute grows well in alluvial soil with high water retention and rich organic matter."
        }
      },
      laterite: {
        message: "🌳 Best Crops: Cashew, Coffee, Tea, Tapioca.",
        crops: {
          Cashew: "Cashew trees grow well in laterite soil with moderate rainfall and warm temperatures.",
          Coffee: "Coffee thrives in laterite soil, especially in areas with high rainfall and moderate temperatures.",
          Tea: "Tea requires laterite soil with good drainage and plenty of rainfall.",
          Tapioca: "Tapioca grows well in laterite soil, especially in regions with tropical climates."
        }
      }
    };
  
    analyzeBtn.addEventListener('click', function () {
      const soil = document.getElementById('soilType').value;
      let message = "";
      let cropButtonsHTML = "";
  
      if (soil && cropsInfo[soil]) {
        message = cropsInfo[soil].message;
        // Create buttons for each recommended crop
        for (const crop in cropsInfo[soil].crops) {
            const page = crop.toLowerCase() + ".html"; // example: cotton → cotton.html
            cropButtonsHTML += `
              <button 
                class="bg-blue-500 text-white px-4 py-2 rounded mb-2 w-full flex justify-between items-center"
                data-crop="${crop}"
                onclick="window.location.href='${page}'"
              >
                ${crop}
                <span class="ml-2 text-sm bg-white text-blue-600 px-2 py-0.5 rounded">More Info</span>
              </button>`;
          }
          
        resultDiv.textContent = message;
        resultDiv.classList.remove('hidden'); // Show the result div
        cropButtonsDiv.classList.remove('hidden'); // Show the crop buttons
        buttonsContainer.innerHTML = cropButtonsHTML; // Add buttons to the container
      } else {
        message = "⚠️ Please select a soil type.";
        resultDiv.textContent = message;
        resultDiv.classList.remove('hidden');
        cropButtonsDiv.classList.add('hidden');
      }
    });
  
    // Event delegation for crop button clicks
    buttonsContainer.addEventListener('click', function (event) {
      if (event.target.tagName === 'BUTTON') {
        const cropName = event.target.getAttribute('data-crop');
        const soil = document.getElementById('soilType').value;
        const cropInfo = cropsInfo[soil].crops[cropName];
        cropInfoDiv.textContent = cropInfo;
        cropInfoDiv.classList.remove('hidden');
      }
    });
  });
  
  