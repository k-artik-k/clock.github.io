function updateTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    // Add leading zeros if necessary
    hours = (hours < 10 ? '0' : '') + hours;
    minutes = (minutes < 10 ? '0' : '') + minutes;
    seconds = (seconds < 10 ? '0' : '') + seconds;
    
    let timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById('clock').textContent = timeString;

    // Convert time to hex color format (e.g., "112233" for 11:22:33)
    let hexColor = '#' + hours + minutes + seconds;

    // Apply the hex color as the background color
    document.body.style.backgroundColor = hexColor;
}

// Update time every second
setInterval(updateTime, 1000);
