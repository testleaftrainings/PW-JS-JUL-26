import axios from "axios"

const endpoint="https://seenivasansanmugam456.atlassian.net/rest/api/3/issue"

const projectId="PT"

const username =""// Enter your username
const apiKey ="" //enter your api key
export async function createJiraIssue(summary:string, description:string){

const issueRequestJson = {
    "fields":{
        "project":{
            "key":projectId
         },
        "summary":summary,
        "description": {
            "content": [
                {
                    "content": [
                        {
                            "text": description,
                            "type": "text"
                        }
                    ],
                    "type": "paragraph"
                }
               ],
               "type": "doc",
              "version": 1
              },
        "issuetype":{
        "name":"Bug"
    }
    }

}

// request - post , get - your website 
// websites - Jira , git -> Request no 
// npm library -> axios 
// npm install axios

await axios.post(
    endpoint,
    issueRequestJson,
    {
        auth:{
            username:username,
            password :apiKey 
        },
        headers:{
            'Content-Type':`application/json`
        }
    }

)

}
