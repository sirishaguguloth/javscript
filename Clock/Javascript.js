function Getangle(){

    // Get hand Elements
    const hoursHands=document.querySelector('.hours');
    const minutesHands=document.querySelector('.minutes');
    const secondsHands=document.querySelector('.seconds');
    // Get weekday and date Elements
     const weekdayElement = document.querySelector('.weekday');
     const dateElement = document.querySelector('.date');
    
    // Current date object 
    const today = new Date();

    // Hours, minutes, and seconds
    let hour =today.getHours();
    let minute=today.getMinutes();
    let second=today.getSeconds();
    
    // Calculate rotation angles for clock hands
    let hrHandRotation = 30 * hour + minute / 2 + second / 120;
    let minHandRotation = 6 * minute + second / 10;
    let secHandRotation = 6 * second;
    
    // Rotate the clock hands
    hoursHands.style.transform = `translateX(-50%) rotate(${hrHandRotation}deg)`;
    minutesHands.style.transform = `translateX(-50%) rotate(${minHandRotation}deg)`;
    secondsHands.style.transform = `translateX(-50%) rotate(${secHandRotation}deg)`;

     // Display weekday and date
     const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
     const weekday = weekdays[today.getDay()];
     const date = today.getDate();
 
     weekdayElement.textContent = weekday;
     dateElement.textContent = date;
}
Getangle();// Initial call to set the clock and date display

setInterval(Getangle, 1000);// Update the clock and date every second