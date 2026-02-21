# Character Generator

> A React application that generates unique random character descriptions.

Each generated sentence combines personality, character, clothing, and an action with an item.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)

## Features
- Generate random character sentences like:  
  `"Brave knight wearing armor holding sword."`
- Highlights key words (character, clothing, item) with `<span>` for styling.
- Maintains history of previous sentences, showing the last two generated.
- Fully TypeScript typed.
- Unit and integration tests with React Testing Library.

## Getting Started
1. Clone the repository
```bash
git clone https://github.com/andyrodrigues30/character-generator.git

cd character-generator
```

2. Install dependencies
```
npm install
```

3. Run the development server
```
npm start
```
App will run on `http://localhost:3000`

4. Run tests (tests are fully React 18 + RTL + jest-dom compatible)
```
npm test
```

5. Generate test coverage
npm run coverage

## License
This project is open source under the **MIT License**.