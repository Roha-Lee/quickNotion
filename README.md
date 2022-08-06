# quickNotion
- https://www.notion.com/my-integrations 에서 integration을 생성한다. 
  - token을 복사해둔다. 
- 노션 페이지를 생성하고 share를 통해 API integration을 추가한다. 
- inline database가 아닌 full page database를 생성하라고 나와있지만, inline database로 시도해보자. 
아래와 같이 환경변수에 임시로 추가한 후 `index.js`를 실행시킨다. 
```bash
mkdir notion-example
cd notion-example
export NOTION_KEY=secret_...
export NOTION_DATABASE_ID=...
```
## Notion Client
아래의 Client안에 있는 것들이 notion Client를 이용하여 해볼 수 있는 것들이다. 
```json
Client {
  blocks: {
    retrieve: [Function: retrieve],
    update: [Function: update],
    delete: [Function: delete],
    children: { append: [Function: append], list: [Function: list] }
  },
  databases: {
    list: [Function: list],
    retrieve: [Function: retrieve],
    query: [Function: query],
    create: [Function: create],
    update: [Function: update]
  },
  pages: {
    create: [Function: create],
    retrieve: [Function: retrieve],
    update: [Function: update],
    properties: { retrieve: [Function: retrieve] }
  },
  users: {
    retrieve: [Function: retrieve],
    list: [Function: list],
    me: [Function: me]
  }
}
```

## Todo
- [] js로 notion에 값 추가해보기 
- [] small talk 준비하기 
- [] alfred app 만들어보기 

