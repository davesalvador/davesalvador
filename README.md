<!-- <img alt="You may have a screen reader, but you still got rick rolled. Yes, this is a gif of Rick Astley's famous 'Never Gonna Give You Up'." src="https://github.com/davesalvador/davesalvador/blob/main/nice.gif?raw=true" width="100%"> -->

```json
{
  "name": "Dave",
  "skills": ["JavaScript", "TypeScript", "Node.js", "ReactJS", "C#", "Python"]
}
```

<img alt="You may have a screen reader, but you still got rick rolled. Yes, this is a gif of Rick Astley's famous 'Never Gonna Give You Up'." src="https://github.com/davesalvador/davesalvador/blob/main/og-dota.gif?raw=true" width="100%">

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sequential GIFs Display</title>
  <style>
    /* Container to center images */
    .image-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      position: relative;
      background-color: #f0f0f0; /* Optional: Background color */
    }

    /* Style for all images */
    .image-container img {
      position: absolute;
      width: 200px;
      height: 200px;
      object-fit: cover;
      border-radius: 8px;
      display: none; /* Hide all images by default */
      transition: opacity 0.5s ease-in-out; /* Optional: Fade effect */
    }

    /* Show the active image */
    .image-container img.active {
      display: block;
      opacity: 1;
    }
  </style>
</head>
<body>
  <div class="image-container">
    <!-- Replace the src attributes with your actual image URLs -->
    <img 
      alt="Minji image 1" 
      src="https://github.com/davesalvador/davesalvador/blob/main/minji1.webp?raw=true" 
      class="active" <!-- Start with the first image active -->
    >
    <img 
      alt="Minji image 2" 
      src="https://github.com/davesalvador/davesalvador/blob/main/minji2.gif?raw=true" 
    >
    <img 
      alt="Minji image 3" 
      src="https://github.com/davesalvador/davesalvador/blob/main/minji3.webp?raw=true" 
    >
    <img 
      alt="Minji image 4" 
      src="https://github.com/davesalvador/davesalvador/blob/main/minji4.webp?raw=true" 
    >
  </div>
  
  <script>
    // Select all images inside the container
    const images = document.querySelectorAll('.image-container img');
    let currentIndex = 0;

    // Define how long each image should be displayed (in milliseconds)
    // Adjust these durations based on your GIFs' lengths
    const durations = [
      3000, // Duration for minji1.webp
      5000, // Duration for minji2.gif
      3000, // Duration for minji3.webp
      4000  // Duration for minji4.webp
    ];

    // Function to show the next image in the sequence
    function showNextImage() {
      // Hide the current image
      images[currentIndex].classList.remove('active');

      // Calculate the index of the next image
      currentIndex = (currentIndex + 1) % images.length;

      // Show the next image
      images[currentIndex].classList.add('active');

      // Set a timeout to show the next image after the current duration
      setTimeout(showNextImage, durations[currentIndex]);
    }

    // Start the sequence after the duration of the first image
    setTimeout(showNextImage, durations[currentIndex]);
  </script>
</body>
</html>
