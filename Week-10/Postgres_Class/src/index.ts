import { Client } from "pg";

const client = new Client({
    connectionString: "postgresql://alamlew:VegFK2sflct5@ep-sweet-wood-27984865.us-east-2.aws.neon.tech/test?sslmode=require"

})


async function createUserTable(){
    await client.connect();
    const result = await client.query(`
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `)
    console.log(result);
    
}

createUserTable();