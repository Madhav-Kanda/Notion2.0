const dotenv = require('dotenv').config();
const { Client } = require('@notionhq/client');

//Init Client

const notion = new Client({
    auth: process.env.NOTION_TOKEN
})


// For knowing the different databases through the integrations
// const listDatabases=async()=>{
//     const res=await notion.databases.list();
//     console.log(res);
// }

// listDatabases();
const database_id = process.env.NOTION_DATABASE_ID

const func = async () => {
    const payload = {
        path: `databases/${database_id}/query`,
        method: 'POST'
    }
    const { results } = await notion.request(payload);
    const videos = results.map((page) => {
        console.log(page)
    })
    // console.log(results);
}



const func2 = async () => {
    const payload2 = {
        path: `blocks/1d8dadfcd0244328a91b54ce1f990131`,
        method: 'GET'
    }
    const  results2  = await notion.request(payload2);
    // const videos = results2.map((page) => {
    //     console.log(page)
    // })
    console.log(results2)
    // console.log(results);
}

func2();
// listDatabases();