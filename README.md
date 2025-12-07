# 🧑‍🍳 Chef Master – Ingredients-Based Recipe Suggester

Chef Master is a full-stack React application that lets users input ingredients and attempts to generate a recipe suggestion from them using an AI backend.

## Features

- Add ingredients you have via UI form
- AI-powered recipe generation using Groq's Llama 3.3 70B model
- Formatted recipe output with cooking instructions
- Fast response times with Groq API
- Secure `.env` handling for private keys
- Clean, responsive user interface

## Tech Used

- React (Vite)
- Express.js
- Node.js
- dotenv for environment variables
- Groq AI API

## How It Works

1. Add Ingredients: Type in ingredients you have (e.g., "pasta", "tomatoes", "garlic")
2. Generate Recipe: Click "Get a recipe" button (Only available after adding 4+ ingredients)
3. AI Processing: Your ingredients are sent to the backend, which calls Groq's AI
4. Recipe Display: A complete recipe with instructions is generated and displayed

## Current Status

Fully functional! The app is working end-to-end with Groq AI:

- Frontend connected to backend
- Backend successfully calling Groq API
- AI generating recipes based on ingredients
- Real-time recipe display

Previous Issue (Resolved): Initially used Hugging Face API which had model/provider restrictions. Switched to Groq API for better reliability and performance.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Color pallets form Coolors
- Powered by Groq AI
- Icons from Font Awesome
- Formating with React Markdown package
- Styling fonts from Google Font

## Author

Harsh Kotwal

- GitHub: https://github.com/HarshKotwal
- LinkedIn: https://www.linkedin.com/in/harshkotwal07/
