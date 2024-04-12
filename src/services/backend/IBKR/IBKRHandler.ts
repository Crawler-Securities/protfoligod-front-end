import axios from "axios";
import { IBKRHandlerInterface } from "./IBKRHandlerInterface";

export {}
export class IBKRHandler implements IBKRHandlerInterface {
    async getAccountSyncData() {
        throw new Error('Method not implemented.');
    }
    async isConnectedStatus() {
        let res = await axios.get('http://localhost:8000/ibkr/connection-status');
        debugger
        return res.data;
    }
}