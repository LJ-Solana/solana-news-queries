import { Connection, clusterApiUrl } from '@solana/web3.js';

let connection: Connection | null = null;

export function getConnection(): Connection {
    if (!connection) {
        connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
    }
    return connection;
}

export function resetConnection(): void {
    connection = null;
}
