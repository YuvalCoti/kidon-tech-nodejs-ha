export class CrappyService {
    withdrawal(id: number, amount: number): Promise<{oldAmount: number, newAmount: number}> {
      throw new Error('not implemented yet');
    }
    deposit(id: number, amount: number): Promise<{oldAmount: number, newAmount: number}> {
        throw new Error('not implemented yet');
      }
    deleteBalance(id: number): Promise<void> {
    throw new Error('not implemented yet');
    }
    getBalance(id: number): Promise<number> {
    throw new Error('not implemented yet');
    }
  }