import {accounts} from './data.service'
export class CrappyService {
    async withdrawal(id: number, amount: number): Promise<{oldBalance: number, newBalance: number}> {
        const oldBalance = accounts[id];
        const random = Math.random();

        if (random > 0.75) {
            throw new Error('random error');
        }
        const randomSleepSeconds: number = (Math.floor(random * 5) + 3) * 1000;
        await new Promise(r => setTimeout(r, randomSleepSeconds));
        accounts[id] = oldBalance - amount;
        return {oldBalance, newBalance: accounts[id]}
    }
    async deposit(id: number, amount: number): Promise<{oldBalance: number, newBalance: number}> {
        const oldBalance = accounts[id];
        const random = Math.random();

        if (random < 0.25) {
            throw new Error('random error');
        }
        const randomSleepSeconds: number = (Math.floor(random * 5) + 3) * 1000;
        await new Promise(r => setTimeout(r, randomSleepSeconds));
        accounts[id] = oldBalance + amount;
        return {oldBalance, newBalance: accounts[id]}
      }
    async deleteBalance(id: number): Promise<void> {
        delete accounts[id];
        return;
    }
    async getBalance(id: number): Promise<number> {
        if (!accounts[id]) {
            throw new Error('account does not exist');
        }
        return accounts[id];

    }
  }