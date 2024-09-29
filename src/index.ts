import { getRatingTimeLeftAndCount } from './queryRatingTimeLeft';
import { countContentPDAs } from './countContentPDAs';

console.log("Script started");

async function main() {
  try {
    // Count total content PDAs
    console.log("Counting program accounts...");
    const accountCounts = await countContentPDAs();
    console.log(`Total program accounts: ${accountCounts.total}`);

    // Query a specific content PDA
    const contentPDA = "HvqsWkVf5pBijHhdKuZ5kr3uL5TQW1KMQVSZwwprGVYv";
    console.log(`Querying for content PDA: ${contentPDA}`);

    const result = await getRatingTimeLeftAndCount(contentPDA);
    console.log("Query result:");
    console.log("Time left:", result.timeLeft);
    console.log("Rating count:", result.ratingCount);
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    console.log("Script finished");
  }
}

main();