# Solana Content Rating System

This project implements a decentralized content rating system on the Solana blockchain. It allows users to submit content, verify it, and rate it within a specified time frame, all while ensuring transparency and trust through on-chain data validation.

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

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
npm install
```

## Usage

To run the main script:

```bash
npm start
```

This will execute the `index.ts` file, which queries the rating time left and count for a specific content PDA.

## Project Structure

- `src/index.ts`: Main entry point of the application.
- `src/queryRatingTimeLeft.ts`: Contains the `getRatingTimeLeftAndCount` function to query content rating information.
- `src/utils/news_content.ts`: Defines the IDL (Interface Definition Language) for the Solana program.
- `src/utils/connection.ts`: Contains the `getConnection` function to establish a connection to the Solana network.

## Features

- Submit and verify content with stake
- Rate content within a specified time frame
- Query remaining time for rating and current rating count
- Finalize content rating after the rating period ends
- Transparent and verifiable on-chain data

## Helper Query Functions

This project includes a set of helper query functions designed to validate and retrieve on-chain data from the Solana blockchain. These functions are crucial for transparency and verification in our content rating system.

### Purpose

The helper query functions serve several important purposes:

1. **Data Validation**: They allow anyone to independently verify the state of content ratings on the blockchain, ensuring transparency and trust in the system.

2. **Real-time Information**: Users can get up-to-date information about the rating status of any piece of content, including the time left for rating and the current number of ratings.

3. **Decentralized Verification**: By making these functions publicly available, we encourage a decentralized approach to data verification, where any user or third-party service can audit the system.

4. **User Empowerment**: These functions empower users to make informed decisions based on current, verified blockchain data.

### Key Functions

The main helper function is `getRatingTimeLeftAndCount`, which:

- Connects to the Solana network
- Fetches the content account data for a given Public Key
- Calculates the remaining time for rating
- Retrieves the current number of ratings

This function can be used by anyone to check the status of any content in the system, providing a transparent view of the rating process.

### Usage Example

```typescript
import { getRatingTimeLeftAndCount } from './queryRatingTimeLeft';

const contentPDA = "HvqsWkVf5pBijHhdKuZ5kr3uL5TQW1KMQVSZwwprGVYv";

getRatingTimeLeftAndCount(contentPDA)
  .then(result => {
    console.log("Time left for rating:", result.timeLeft);
    console.log("Current number of ratings:", result.ratingCount);
  })
  .catch(error => {
    console.error("Error querying content:", error);
  });
```

By providing these helper functions, we ensure that our content rating system remains open, verifiable, and trustworthy for all users.

## API Reference

### `getRatingTimeLeftAndCount(contentPDA: string)`

Fetches the remaining time for rating and the current rating count for a given content PDA.

- `contentPDA`: The Public Key (as a string) of the content account.

Returns: An object containing:
- `timeLeft`: A string describing the time left for rating or indicating if the rating period has ended.
- `ratingCount`: The number of ratings received.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

## License

This project is licensed under the [MIT License](LICENSE).