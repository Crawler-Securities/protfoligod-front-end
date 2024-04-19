import axios from "axios";
import {IBKRHandlerInterface} from "./IBKRHandlerInterface";

export {}

export class IBKRHandler implements IBKRHandlerInterface {
    async getAccountSyncData() {
        throw new Error('Method not implemented.');
    }

    async isConnectedStatus(): Promise<boolean> {
        try {
            const response = await axios.get('http://localhost:8000/ibkr/connection-status');
            return response.data.connected;
        } catch (error: unknown) {
            console.error("Error fetching connection status:", error);
            throw error; // Consider any other error as not connected
        }
    }
}