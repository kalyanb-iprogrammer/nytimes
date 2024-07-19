<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

1. Open another tab in terminal . Switch back to project root directory and execute below command
   ```sh
   cd nytimes
   ```
2. Install all packages
   ```sh
   npm i
   ```
3. Create `.env` file
   ```sh
   touch .env

4. Edit `.env` file
   ```js
   VITE_API_KEY="YOUR_API_KEY"
   VITE_API_ENDPOINT="API_ENDPOINT"

5. Run client
   ```sh
   npm run dev
   ```
   Client will start on localhost.

## To run test with Jest
   ```sh
   npm test
   ```
## To UI test with Cypress
   ```sh
   npx cypress open
   ```