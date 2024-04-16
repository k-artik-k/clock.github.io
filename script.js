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

    // Calculate contrasting color for text based on background color
    let invertedColor = getContrastYIQ(hexColor);

    // Apply the contrasting color as the text color
    document.getElementById('clock').style.color = invertedColor;
}

// Update time every second
setInterval(updateTime, 1000);

// Function to calculate contrasting color based on background color
function getContrastYIQ(hexcolor){
    hexcolor = hexcolor.replace("#", "");
    let r = parseInt(hexcolor.substr(0,2),16);
    let g = parseInt(hexcolor.substr(2,2),16);
    let b = parseInt(hexcolor.substr(4,2),16);
    let yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128) ? '#000' : '#fff';
}
