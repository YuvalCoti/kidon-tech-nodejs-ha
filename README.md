
<h1 align="center">Kidon Node Task</h1>

<h2 align="center">Please read the full assignment description before you start!!!</h2>

## About ##

This is a home assignment to test practical thinking and skills by Kidon tech

## Story ##

We need to build an api for our next payment solution only that this api must use the "Crappy api" as a service. The "Crappy api" suffers from all kinds of bad behaviour like long response time and errors that return randomly …

Please remember we are handeling money and therefore locking mechanisms and good asynchronous handling are crucial.

With that being said your server must be non-blocking while handling multiple deposit requests.

I know it might be a bit confusing but lets take a lock at the service and the task and it will clear it up.


## Crappy Service documentation ##

[Crappy service](https://github.com/YuvalCoti/kidon-tech-nodejs-ha/blob/master/crappy.service.ts)

Endpoints:

- Description: deposit money to the account id balance - increase the balance 
deposit : (id: number, amount: number) => Promise<{oldBalance: number, newBalance: number}>
- Description: withdrawal money from the account id balance - decrease the balance 
withdrawal: (id: number, amount: number) => Promise<{oldBalance: number, newBalance: number}>
- Description: Delete the account id
deleteBalance: (id: number) => Promise<void> 
- Description: Get the account id balance
getBalance: (id) => Promise<number>

## Task requirements ##

Before starting make sure you have the following installed:
- [Git](https://git-scm.com) 
- [Node](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Code editor](https://code.visualstudio.com/)

You will need to implement the folowing endpoints:

- Description: deposit money to the account id balance - increase the balance 
Url: /deposit
Http Action: POST
Body: {
	Id: number,
amount: number
}
- Description: withdrawal money from the account id balance - decrease the balance 
Url: /withdrawal
Http Action: POST
Body: {
	Id: number,
amount: number
}
- Description: Delete the account id
Url: /id
Http Action: DELETE
- Description: Get the account id balance
Url: /id
Http Action: GET

<h3 align="center"><b>The server must use the “Crappy service” service!!!.</b></h3>
<h3 align="center"><b>You are not allowed to modify the “CrappyService”!!!</b></h3>

</br>

## How to start and submit ##

- cone this repo
```bash
$ git clone https://github.com/YuvalCoti/kidon-tech-nodejs-ha.git
```
- create a branch named after you
```bash
$ git checkout -b <your_name>
```
- Implement a server with the task requirements endpoints on what ever stracture and typescript platform you like, for your convenience you have a simple ts server implemented on branch "simple-imple" you can base on.
- The server should provide service at port 3000.
- there is a test suite provided to test some of the cases, you may add tests if you like.


## Tests ##

To run the tests from the root folder of the cloned project and assuming the server instance is running and providing service at http://localhostport:3000

```bash
# Cd to the tests directory
$ cd tests

# Install the packages
$ npm i

# run the tests
$ npx jest
```
