import { PublicKey } from '@solana/web3.js';
import { Program, AnchorProvider } from '@project-serum/anchor';
import { IDL } from './utils/news_content';
import { getConnection } from './utils/connection';

export async function getRatingTimeLeftAndCount(contentPDA: string) {
  console.log("Starting getRatingTimeLeftAndCount function");
  
  const connection = getConnection();
  console.log("Connection obtained");
  
  // Set up the provider
  console.log("Setting up AnchorProvider");
  const provider = new AnchorProvider(connection, {} as any, {});
  console.log("AnchorProvider set up");
  
  // Create a Program instance
  console.log("Creating Program instance");
  const programId = new PublicKey("DcyZJhRUd96TAEYV7a7rWofy6kz9QAqsji4fftcox89y"); 
  const program = new Program(IDL, programId, provider);
  console.log("Program instance created");

  // Fetch the Content account data
  console.log("Fetching Content account data");
  const contentPubkey = new PublicKey(contentPDA);
  
  try {
    const contentAccount = await program.account.content.fetch(contentPubkey);
    console.log("Content account data fetched");

    // Get the current on-chain time
    console.log("Getting current block time");
    const currentSlot = await connection.getSlot();
    console.log("Current slot:", currentSlot);
    const currentTime = await connection.getBlockTime(currentSlot);
    console.log("Current block time:", currentTime);

    if (!currentTime) {
      throw new Error("Failed to fetch current block time");
    }

    // Calculate time left
    console.log("Calculating time left");
    const timeLeft = contentAccount.ratingEndTime.toNumber() - currentTime;
    console.log("Time left (in seconds):", timeLeft);

    // Get the number of ratings
    const ratingCount = contentAccount.totalRatings.toNumber();
    console.log("Number of ratings:", ratingCount);

    let timeLeftString;
    if (timeLeft <= 0) {
      timeLeftString = "Rating period has ended";
    } else {
      // Convert seconds to a more readable format
      const days = Math.floor(timeLeft / (24 * 60 * 60));
      const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
      const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
      timeLeftString = `Time left to rate ${contentPDA}: ${days} days, ${hours} hours, ${minutes} minutes`;
    }

    return {
      timeLeft: timeLeftString,
      ratingCount: ratingCount
    };

  } catch (error) {
    console.error("Error fetching content account:", error);
    throw error;
  }
}