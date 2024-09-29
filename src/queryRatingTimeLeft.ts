import { PublicKey } from '@solana/web3.js';
import { Program, AnchorProvider } from '@project-serum/anchor';
import { IDL } from './utils/news_content'; 
import { getConnection } from './utils/connection';

export async function getRatingTimeLeft(contentPDA: string) {
  const connection = getConnection();
  
  // Set up the provider
  const provider = new AnchorProvider(connection, {} as any, {});
  
  // Create a Program instance
  const programId = new PublicKey("DcyZJhRUd96TAEYV7a7rWofy6kz9QAqsji4fftcox89y"); 
  const program = new Program(IDL, programId, provider);

  // Fetch the Content account data
  const contentPubkey = new PublicKey(contentPDA);
  const contentAccount = await program.account.Content.fetch(contentPubkey);

  // Get the current on-chain time
  const currentTime = await connection.getBlockTime(await connection.getSlot());

  if (!currentTime) {
    throw new Error("Failed to fetch current block time");
  }

  // Calculate time left
  const timeLeft = contentAccount.ratingEndTime.toNumber() - currentTime;

  if (timeLeft <= 0) {
    return "Rating period has ended";
  } else {
    // Convert seconds to a more readable format
    const days = Math.floor(timeLeft / (24 * 60 * 60));
    const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
    return `Time left to rate: ${days} days, ${hours} hours, ${minutes} minutes`;
  }
}