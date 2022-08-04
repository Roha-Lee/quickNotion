import { Client } from "@notionhq/client"
import env from "./env.js"
const notion = new Client({ auth: env.NOTION_KEY })
// console.log(notion);
const response = await notion.databases.retrieve({ database_id: env.DB_KEY });
const sample = {
    name: {
        type: "rich_text",
        "title": [{ "type": "text", "text": { "content": "Tomatoes" } }],
    },
    tag: {
        type: "multi_select",
        name: "dd",
        color: "red", 
    },
    created_at: {
        "type": "created_type",
        "date": { "start": "2021-05-11" },
    },   
}
console.log(response);
notion.databases.update({
    database_id: env.DB_KEY, 
    properties: sample,
});