import { Client } from "@notionhq/client"
import env from "./env.js"
const notion = new Client({ auth: env.NOTION_KEY })
const response = await notion.databases.retrieve({ database_id: env.DB_KEY });
// header 정보를 가져올 수 있음. 
console.log("[Database Retrieve]");
console.log(response);

console.log("[Database Item Retrieve]");
(async () => {
    const databaseId = env.DB_KEY;
    const response = await notion.databases.query({
        database_id: databaseId,
        sorts: [
            {
                property: "name",
                direction: "ascending",
            },
        ],
    });
    // get text
    response.results.forEach(item => {
        console.log(item.properties["roha-text"].rich_text[0].text.content);
    });
    
    // get name 
    response.results.forEach(item => {
        console.log(item.properties["name"].title[0].text.content);
    });    

    // get count
    response.results.forEach(item => {
        console.log(item.properties["roha-count"].number);
    });    
})();

console.log("[Modify Pages]");

(async () => {
    const pageId = env.PAGE_KEY;
    const response = await notion.pages.retrieve({
        page_id: pageId,
    });
    console.log(response.properties["roha-text"].rich_text);
    await notion.pages.update({
        page_id: pageId,
        properties: {
            "roha-text": {
                rich_text : [
                    {
                        text: {
                            content: "MODIFIED",
                        },
                    }
                ]
            },
        }
    });
})();

console.log("[Modify specific Pages - #1]");
(async () => {
    const databaseId = env.DB_KEY;
    const response = await notion.databases.query({
        database_id: databaseId,
    });
    
    // roha-multiselect에 test3이 포함되어있는 것들을 변경 
    response.results.forEach(item => {
        console.log(item.properties["roha-count"].number);
    });    
})();