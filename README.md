# Solana Content Rating Query System

This project implements a query system for a decentralized content rating program on the Solana blockchain. It allows users to retrieve information about content submissions, verifications, and ratings within a specified time frame, all while ensuring transparency through on-chain data validation.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Features](#features)
- [Helper Query Functions](#helper-query-functions)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## Installation

To set up this project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/your-username/solana-news-queries.git
   ```

2. Navigate to the project directory:
   ```
   cd solana-news-queries
   ```

3. Install dependencies:
   ```
   npm install
   ```

## Usage

To use this query system:

1. Ensure you have a Solana wallet set up and connected to the desired network (mainnet, testnet, or devnet).

2. Set up your environment variables:
   - Copy the `.env.example` file to `.env`
   - Fill in the necessary values, such as your RPC endpoint

3. Run the query script:
   ```
   npm start
   ```

4. The script will prompt you for a content PDA. Enter the public key of the content you want to query.

5. The system will return information about the content, including the time left for rating and the current number of ratings.