import { Client } from "@notionhq/client"
import env from "./env.js"
const notion = new Client({ auth: env.NOTION_KEY })
const response = await notion.databases.retrieve({ database_id: env.DB_KEY });
(async () => {
    const databaseId = env.DB_KEY;
    const response = await notion.databases.query({
        database_id: databaseId,
        sorts: [
            {
                property: 'name',
                direction: 'ascending',
            },
        ],
    });
    response.results.forEach(item => {
        console.log(item.properties);
    });
})();
