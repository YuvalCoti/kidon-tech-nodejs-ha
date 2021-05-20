
import axios from 'axios';
import { test, expect } from '@jest/globals';
const localapiAddress = `http://localhost:3000`;

test('add balance', async () => {
    try {
    // clear the account
    await axios.delete(`${localapiAddress}/deleteAccount/1`);
    // add  amount to one's balance
    axios.post(`${localapiAddress}/deposit`, {id: 1, amount: 5})
    const accountBalance = await axios.get(`${localapiAddress}/1`);
    // expect to have the right balance in the end

    expect(accountBalance).toBe(5);
    } catch (error) {
        expect(error.message).toBe('');
    }

  });

test('multiple async transactions', async () => {
    try {
    // clear the account
    await axios.delete(`${localapiAddress}/deleteAccount/1`);
    // add multiple amounts to one balance
    // tip: this test check that you implemented a lock/queue mechanisem over the account
    const promises = [];
    promises.push(axios.post(`${localapiAddress}/deposit`, {id: 1, amount: 5}));
    promises.push(axios.post(`${localapiAddress}/deposit`, {id: 1, amount: 3}));
    promises.push(axios.post(`${localapiAddress}/deposit`, {id: 1, amount: 2}));
    await Promise.all(promises)
    const accountBalance = await axios.get(`${localapiAddress}/1`);
    // expect to have the right balance in the end

    expect(accountBalance).toBe(10);
    } catch (error) {
        expect(error.message).toBe('');
    }

  });
  test('Withdrawal', async () => {
    try {
    // clear the account
    await axios.delete(`${localapiAddress}/deleteAccount/1`);
    await axios.post(`${localapiAddress}/deposit`, {id: 1, amount: 50});
    // make several withdrawal requests and make sure each of them pass
    // tip: expecting a retry untill the request from the crappy service pass
    for(let i = 0; i < 10; i++) {
      await axios.post(`${localapiAddress}/withdrawal`, {id: 1, amount: 5});
    }
    // the odds of this test to be false positive is 0.25^10

    const accountBalance = await axios.get(`${localapiAddress}/1`);
    // expect to have the right balance in the end

    expect(accountBalance).toBe(0);
    } catch (error) {
        expect(error.message).toBe('');
    }

  });