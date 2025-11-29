# Live Gold Price Tracking Server

## Table of Contents
- [Description](#description)
- [Screenshots](#screenshots)
- [Installation](#installation)

## Description

Built a real-time client–server system where the **server emits updated gold prices every 5 seconds using simulated market data**.

Gold prices are simulated because live APIs updates are slow (At best every 10min); this way, you can see the server-client interaction in real time.

### Frontend
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

## Screenshots

### Frontend

#### Live
<img width="517" height="734" alt="Live price screen" src="https://github.com/user-attachments/assets/112c8614-a550-48e9-952b-3df110451da1" />

#### On Purchase
<img width="517" height="734" alt="Purchase confirmation dialog" src="https://github.com/user-attachments/assets/f362c5de-2d22-4be3-8722-09ef564d850d" />

#### Offline Server
<img width="497" height="696" alt="Server offline view" src="https://github.com/user-attachments/assets/7a5c68f4-ee71-41d3-8efe-b9d34bf0bdd7" />

#### Requests
<img width="2494" height="295" alt="Network requests screenshot" src="https://github.com/user-attachments/assets/18379757-7fd8-465a-89c0-2ae56848caa9" />

### Backend
<img width="866" height="629" alt="Server console screenshot" src="https://github.com/user-attachments/assets/2c442d58-0bfa-4242-a89e-4261d6dcc30b" />

## Installation

1. Clone the repository:  
```bash
git clone <repo-url>
cd live-gold-price-app
```

2. Build the project:
```bash
npm start
```
3. Open `http://localhost:8080/` on preferred browser
