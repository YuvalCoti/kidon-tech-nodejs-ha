
import axios from 'axios';
import { test, expect } from '@jest/globals';
const localapiAddress = `http://localhost:3000`;

test('add balance', async () => {
    try {
    // clear the account
    const result = await axios.delete(`${localapiAddress}/deleteAccount/1`);
    // add  amount to one's balance
    const deposite = axios.post(`${localapiAddress}/deposit`, {id: 1, amount: 5})
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
    const result = await axios.delete(`${localapiAddress}/deleteAccount/1`);
    // add multiple amounts to one balance
    const promises = [];
    promises.push(axios.post(`${localapiAddress}/deposit`, {id: 1, amount: 5}));
    promises.push(axios.post(`${localapiAddress}/deposit`, {id: 1, amount: 3}));
    promises.push(axios.post(`${localapiAddress}/deposit`, {id: 1, amount: 2}));
    const results = await Promise.all(promises)
    const accountBalance = await axios.get(`${localapiAddress}/1`);
    // expect to have the right balance in the end

    expect(accountBalance).toBe(10);
    } catch (error) {
        expect(error.message).toBe('');
    }

  });