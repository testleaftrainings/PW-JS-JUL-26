import test, { expect } from "@playwright/test";


test.describe.serial("Chaining the request", async () => {
    let SNOW_Access_TOKEN: any
    let indicentNumber: any
    let userid: any

    test("Learn to generate the Outh token", async ({ request }) => {

        let response = await request.post("https://dev277537.service-now.com/oauth_token.do", {

            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            form: {
                "grant_type": "password",
                "client_id": "fceccaae00114c7991b0ce5936bed6a7",
                "client_secret": "@!eh|1h)8O;p3&G*UKhlZ|P[|m2z:YNA",
                "username": "admin",
                "password": "Ck$CgQ5$mRt8"
            }
        })
        let responseBody = await response.json()
        SNOW_Access_TOKEN = responseBody.access_token
        expect(response.status()).toBe(200)
        console.log(SNOW_Access_TOKEN, response.status())
    })

    test("Create the incident using the method chaining", async ({ request }) => {

        const response = await request.post("https://dev277537.service-now.com/api/now/table/incident", {
            headers: {
                "Authorization": `Bearer ${SNOW_Access_TOKEN}`,
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            data:
            {
                "short_description": "Laptop Dell(1234) is not rebooting -- created using Postman agent 7.56",
                "subcategory": "Internal Application"
            }
        })
        let responseBody = await response.json()
        expect(response.status()).toBe(201)
        indicentNumber = responseBody.result.number
        userid = responseBody.result.sys_id
        console.log(indicentNumber, response.status(), userid)
        console.log(await response.text())
    })

    //test("fetch")
    //test("update")
    //test("delete")
})