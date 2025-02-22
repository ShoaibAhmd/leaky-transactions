# Steps to setup the server
1. Run `npm install`
2. Run create-students.sql in your mysql server
3. Run `npm run start:dev`

# Steps to simulate a leaky transaction
1. Open your api testing tool
2. Send an GET http request to `http://localhost:3010/students`
3. Keep sending the requests until you are no more able to get response from api.
4. Run query on mysql `select * from information_schema.processlist;`
5. You will see number of processes on sleep command, which means their connection is left open and transaction was not commited or rolledback.

