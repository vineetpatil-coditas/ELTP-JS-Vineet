function feast(beast, dish) {
    // Check if the first and last letters of the beast match the dish
    return beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1);
  }
  
 