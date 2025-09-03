import { test, expect } from '@playwright/test'
import { de, faker } from '@faker-js/faker'

import { getPOSTAPIRequestBody } from '../../src/utils/APIHelper'

import tokenAPIRequest from '../../test-data/api_requests/Token_API_Request.json'
import patchAPIRequest from '../../test-data/api_requests/PATCH_API_Request.json'


test.use({ baseURL: process.env.BASE_API_URL })

test('Create DELETE API Request', async ({ request }) => {

    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const totalPrice = faker.number.int({ min: 100, max: 1000 });

    const postAPIRequest = await getPOSTAPIRequestBody(firstName, lastName, totalPrice, true,
        "Cloud Computing", "2020-02-20", "2030-03-30");

    // Create POST API Request
    const postAPIResponse = await request.post(`/booking`, { data: postAPIRequest });

    // Print POST API Response
    const jsonPOSTAPIResponse = await postAPIResponse.json();
    console.log('POST API Response : ', JSON.stringify(jsonPOSTAPIResponse, null, 2));

    // Create GET API Request
    const bookingId = jsonPOSTAPIResponse.bookingid;
    console.log('Booking Id : ', bookingId);

    const getAPIResponse = await request.get(`/booking/${bookingId}`);

    // Validate status code, status text
    expect(getAPIResponse.status()).toBe(200);
    expect(getAPIResponse.statusText()).toBe('OK');

    // Print GET API Response
    const getAPIJSONResponse = await getAPIResponse.json();
    console.log('GET API Response : ', JSON.stringify(getAPIJSONResponse, null, 2));

    // Generate token
    const tokenAPIResponse = await request.post(`/auth`, { data: tokenAPIRequest });

    // Validate status code, status text
    expect(tokenAPIResponse.status()).toBe(200);
    expect(tokenAPIResponse.statusText()).toBe('OK');

    const tokenAPIJSONResponse = await tokenAPIResponse.json();
    const token = tokenAPIJSONResponse.token;
    console.log('Token : ', token)

    // Create PATCH API Request
    const patchAPIResponse = await request.patch(`/booking/${bookingId}`, {
        headers: {
            "Content-Type": "application/json",
            "Cookie": `token=${token}`
        },
        data: patchAPIRequest,
    })

    // Validate status code, status text
    expect(patchAPIResponse.status()).toBe(200);
    expect(patchAPIResponse.statusText()).toBe('OK');

    // Print PATCH API response
    const patchAPIJSONResponse = await patchAPIResponse.json();
    console.log('PATCH API Response : ', JSON.stringify(patchAPIJSONResponse, null, 2));

    // Create DELETE API Request
    const deleteAPIResponse = await request.delete(`/booking/${bookingId}`, {
        headers: {
            "Content-Type": "application/json",
            "Cookie": `token=${token}`
        },
    })

    // Validate status code, status text
    expect(deleteAPIResponse.status()).toBe(201);
    expect(deleteAPIResponse.statusText()).toBe('Created');

    console.log(`DELETE API Response : `, await deleteAPIResponse.body());
})
