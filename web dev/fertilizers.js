const fertilizerRecommendations = {
    "rice": '<a href="urea.html" class="text-green-600 underline hover:text-green-800">Use Urea</a> for nitrogen boost and <a href="dap.html" class="text-green-600 underline hover:text-green-800">DAP</a> for phosphorus needs.',
    "wheat": 'Apply a balanced <a href="npk.html" class="text-green-600 underline hover:text-green-800">NPK (20-20-20)</a> fertilizer for healthy growth.',
    "maize": 'Use nitrogen-rich fertilizers like <a href="ammoniumsulfate.html" class="text-green-600 underline hover:text-green-800">Ammonium Sulfate</a>.',
    "cotton": '<a href="potassiumsulfate.html" class="text-green-600 underline hover:text-green-800">Potassium sulfate</a> helps cotton resist pests.',
    "pest-aphids": 'Apply <a href="neemspray.html" class="text-green-600 underline hover:text-green-800">neem-based sprays</a> or insecticidal soaps.',
    "pest-mites": 'Use <a href="sulfur.html" class="text-green-600 underline hover:text-green-800">sulfur-based miticides</a> or horticultural oils.',
    "pest-whiteflies": 'Apply <a href="systemicinsecticide.html" class="text-green-600 underline hover:text-green-800">systemic insecticides</a> and neem extracts.'
  };
  
  function recommendFertilizer() {
    const input = document.getElementById("searchInput").value.trim().toLowerCase(); // Get typed input
    const output = document.getElementById("searchResult"); // Div to display the result

    if (input in fertilizerRecommendations) {  // If input matches a crop/pest
      output.innerHTML = fertilizerRecommendations[input];  // Show the recommendation
      output.classList.remove("hidden");  // Make sure the result is visible
    } else {
      output.innerText = "❌ Sorry, no recommendation found for this input.";  // Show error message
      output.classList.remove("hidden");
    }
  }
  
  // JavaScript to handle the camera input and display the uploaded image
// Predefined list of pests and their corresponding fertilizers
const pestFertilizerRecommendations = {
    "aphids": "Apply <a href='neemspray.html' class='text-green-600 underline hover:text-green-800'>neem-based sprays</a> for pest control. Use <a href='urea.html' class='text-green-600 underline hover:text-green-800'>Urea</a> for nitrogen boost.",
    "mites": "Use <a href='sulfur.html' class='text-green-600 underline hover:text-green-800'>sulfur-based miticides</a> or horticultural oils. Fertilizer recommendation: <a href='npk.html' class='text-green-600 underline hover:text-green-800'>NPK fertilizer</a> for balanced growth.",
    "whiteflies": "Apply <a href='systemicinsecticide.html' class='text-green-600 underline hover:text-green-800'>systemic insecticides</a> and neem extracts. Use <a href='mop.html' class='text-green-600 underline hover:text-green-800'>MOP (Muriate of Potash)</a> to improve fruiting."
  };
  
  document.getElementById("cameraInput").addEventListener("change", function(event) {
    const file = event.target.files[0];  // Get the uploaded file
    const cameraResultDiv = document.getElementById("cameraResult");
    const uploadedImage = document.getElementById("uploadedImage");
    const pestResult = document.getElementById("pestResult");
    const fertilizerResult = document.getElementById("fertilizerResult");
  
    if (file) {
      // Display the uploaded image
      uploadedImage.src = URL.createObjectURL(file);
      cameraResultDiv.classList.remove("hidden");
  
      // Simulate pest detection based on image (for demonstration, we'll randomly choose a pest)
      const detectedPest = detectPest(file);  // This function simulates pest detection
  
      // Show pest name and fertilizer recommendations
      pestResult.innerText = `Detected Pest: ${detectedPest}`;
      fertilizerResult.innerHTML = pestFertilizerRecommendations[detectedPest] || "❌ No fertilizer recommendation available.";
    } else {
      cameraResultDiv.classList.add("hidden");
    }
  });
  
  // Simulated pest detection function (can be replaced with real image analysis)
  function detectPest(file) {
    // Simulating pest detection based on the file (you can integrate an API or logic here)
    const pests = ["aphids", "mites", "whiteflies"];
    const randomPest = pests[Math.floor(Math.random() * pests.length)];
    return randomPest;
  }
  
  
  
  