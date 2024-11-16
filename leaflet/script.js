// Initialize the map
const map = L.map('main_map').setView([51.505, -0.09], 13);

// Add map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);
