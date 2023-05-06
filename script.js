//your JS code here. If required.
//your JS code here. If required.
 function setBackgroundImage() {
        // Get the screen width and height
        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;
        
        // Determine the screen orientation
        const orientation = screenWidth > screenHeight ? 'landscape' : 'portrait';
        
        // Set the appropriate background image
        const backgroundImageUrl = orientation === 'landscape' ? 'https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Paysage-en-orientation-paysage.jpg' : 'https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Portrait-en-orientation-portrait.jpg';
        
        // Set the background image of the body element
        document.body.style.backgroundImage = `url(${backgroundImageUrl})`;
      }
      
      // Call the function initially and whenever the window is resized
      window.addEventListener('load', setBackgroundImage);
      window.addEventListener('resize', setBackgroundImage);