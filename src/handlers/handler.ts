'use strict';

import TradeModel from './../models/trade';
import { Client } from 'ts-postgres';
// the total gain amount for a given customer,
// the total transaction amount for a given customer, and
// the number of trades made by a given customer.
const dbConfig = {
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USER,
  dbPass: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
};
const totalGains = async (event: any) => {
  const client = new Client({
    "host": dbConfig.dbHost,
    "database": dbConfig.dbName,
    "user": dbConfig.dbUser,
    "password": dbConfig.dbPass,
    "port": 5432,
  });
  await client.connect();
  const trade = new TradeModel(client);
  const userID = parseInt(event.queryStringParameters.userId, 10);
  if (!userID) {
    return {
      statusCode: 400,
      body: JSON.stringify(
        {
          message: "Please enter Valid ID",
        },
        null,
        2
      ),
    };
  }
  try {
    const results = await trade.totalGains(userID);
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          results,
        },
        null,
        2
      ),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify(
        {
          error: error,
        },
        null,
        2
      ),
    };
  } finally {
     await client.end();
  }


  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

const exampleHandler = async (event: any) => {
     console.log("WAKAKAKAKAKAKKAKAKAAKKA");

   try {
     return {
       statusCode: 200,
       body: JSON.stringify(
         {
           message: 'WAKAKAKAKAKAKKAKAKAAKKA!',
           input: event,
         },
         null,
         2
       ),
     };
   } catch (e) {
     return {
       statusCode: 200,
       body: JSON.stringify(
         {
           message: 'ERROORORORORORORORO'
         },
         null,
         2
       ),
     };
   }
};

export { totalGains, exampleHandler }; //eslint-disable-line