import { Connection, clusterApiUrl } from '@solana/web3.js';

export function getConnection(): Connection {
  console.log("Creating Solana connection...");
  const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
  console.log("Solana connection created");
  return connection;
}