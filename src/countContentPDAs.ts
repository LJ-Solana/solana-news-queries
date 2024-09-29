import { PublicKey } from '@solana/web3.js';
import { Program, AnchorProvider } from '@project-serum/anchor';
import { IDL } from './utils/news_content';
import { getConnection } from './utils/connection';

export async function countContentPDAs() {
  console.log("Starting countContentPDAs function");
  
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

  try {
    // Fetch all accounts of type 'content'
    console.log("Fetching all content accounts");
    const contentAccounts = await program.account.content.all();
    console.log("Content accounts fetched");

    const totalContentPDAs = contentAccounts.length;
    console.log(`Total number of content PDAs: ${totalContentPDAs}`);

    return totalContentPDAs;
  } catch (error) {
    console.error("Error counting content PDAs:", error);
    throw error;
  }
}