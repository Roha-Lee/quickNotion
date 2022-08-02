import { Client } from "@notionhq/client"

const notion = new Client({ auth: process.env.NOTION_KEY })
// console.log(notion);
const response = await notion.databases.retrieve({ database_id: "" });
console.log(response);
