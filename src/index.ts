import { getRatingTimeLeftAndCount } from './queryRatingTimeLeft';

console.log("Script started");

const contentPDA = "HvqsWkVf5pBijHhdKuZ5kr3uL5TQW1KMQVSZwwprGVYv";
console.log("Querying for content PDA:", contentPDA);

getRatingTimeLeftAndCount(contentPDA)
  .then(result => {
    console.log("Query result:");
    console.log("Time left:", result.timeLeft);
  })
  .catch(error => {
    console.error("An error occurred:", error);
  })
  .finally(() => {
    console.log("Script finished");
  });