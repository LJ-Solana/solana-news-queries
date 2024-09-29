import { PublicKey, Connection } from '@solana/web3.js';
import { Program, AnchorProvider } from '@project-serum/anchor';
import { IDL } from './utils/news_content';
import { getConnection } from './utils/connection';

export async function countContentPDAs() {
  console.log("Starting countContentPDAs function");
  
  const connection = getConnection();
  console.log("Connection obtained");
  
  // Create a Program instance
  console.log("Creating Program instance");
  const programId = new PublicKey("DcyZJhRUd96TAEYV7a7rWofy6kz9QAqsji4fftcox89y"); 
  console.log("Program instance created");

  try {
    // Fetch all accounts for the program
    console.log("Fetching all program accounts");
    const accounts = await connection.getProgramAccounts(programId);
    console.log(`Total accounts found: ${accounts.length}`);

    let validAccounts = 0;
    let invalidAccounts = 0;

    for (const { pubkey, account } of accounts) {
      console.log(`Account ${pubkey.toBase58()}:`);

      // You can add more specific checks here if needed
      if (account.data.length > 0 && account.owner.equals(programId)) {
        validAccounts++;
      } else {
        invalidAccounts++;
      }
    }

    console.log(`Total program accounts: ${accounts.length}`)

    return {
      total: accounts.length,
      valid: validAccounts,
      invalid: invalidAccounts
    };
  } catch (error) {
    console.error("Error fetching program accounts:", error);
    throw error;
  }
}