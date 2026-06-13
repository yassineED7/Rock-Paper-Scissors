# Rock Paper Scissors Game

A fully interactive, console-based Rock Paper Scissors game built with vanilla JavaScript. This project was developed as part of **The Odin Project** curriculum to demonstrate mastery of core JavaScript fundamentals, functional programming, and scope logic.

---

## 🚀 Project Overview (The STAR Method)

### 📁 Situation
As part of my journey to master full-stack web development, I needed to build a fully functional decision-making game from scratch. The goal was to move away from rigid, static code and create an interactive script capable of processing dynamic user choices, simulating an automated opponent, and running continuous gameplay directly inside the browser console.

### 🎯 Task
The objective was to engineer a programmatic flow that handles a 5-round match between a human player and a computer. The core challenges included:
* Generating deterministic yet random choices for the automated opponent.
* Enforcing case-insensitivity on variable user inputs (e.g., accepting "RoCk" or "rock").
* Securing data encapsulation by managing scores and game logic strictly within their correct execution scopes.

### 🛠️ Action
To solve these challenges, I designed a modular architecture using the following technical strategies:
1.  **Randomization Control:** Developed `getComputerChoice()` utilizing `Math.random()` and floor mapping to dynamically output game signs.
2.  **State & Scope Management:** Encapsulated the player scores (`humanScore`, `computerScore`) and the round-running mechanism inside a master controller function named `playGame()`. This prevented global state pollution.
3.  **Algorithmic Evaluation:** Built an optimized `playRound()` helper function that uses explicit boolean logic clusters to instantly evaluate win/loss matrices and dynamically return multi-value arrays containing matching updates.
4.  **Continuous Control Flow:** Implemented a robust `for` loop that runs exactly 5 iterations, explicitly recalling input prompts each turn to guarantee fresh inputs per round.

### 🏆 Result
* **Production-Ready Logic:** Successfully engineered a bug-free game flow where state updates correctly after every prompt and accurately prints results in real-time.
* **Encapsulated Architecture:** Resolved critical variable scope leaks by strictly localizing specific logic steps within their corresponding blocks.
* **Clean Outputs:** Delivered clean, structured console interfaces with an automatic final score validation that correctly crowns the ultimate champion.

---

## 💻 Tech Stack
* **Language:** JavaScript (ES6+)
* **Environment:** Web Browser Console
* **Version Control:** Git / GitHub

---

## 🛠️ How to Play
1. Clone this repository to your local machine.
2. Open the `index.html` file in any modern web browser.
3. Open the Developer Tools Console (`F12` or `Ctrl + Shift + I`).
4. Type your move (`rock`, `paper`, or `scissors`) into the pop-up prompt and watch the engine calculate the scores!