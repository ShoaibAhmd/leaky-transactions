const express = require('express');
const dbPool = require('./connection-pool');

const port = 3010;
const server = express();

server.get('/students', async (request, response) => {

    try {
        const connection = await dbPool.getConnection();

        await connection.beginTransaction();

        const students = await connection.query('SELECT id, name, contact FROM STUDENTS;');

        if (!students || !students[0]) {
            console.log(`[INFO] Unable to receive students data.`);
        }
        console.log(`[INFO] Students Data: ${JSON.stringify(students[0])}`);

        response.json({
            data: students[0],
            success: true,
            message: "OK"
        });

    } catch (error) {
        console.log(`[ERROR] ${error}`);
        console.log(`[ERROR] ${JSON.stringify(error)}`);

        response.status(500);
        response.json({
            success: false
        });
    }
})

server.listen(port, (error) => {

    if (error) {
        console.log(`[ERROR] ${error}`);
    }
    console.log(`server is listening on port ${port}`);
});
