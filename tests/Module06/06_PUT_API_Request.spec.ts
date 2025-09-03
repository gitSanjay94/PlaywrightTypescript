import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

import tokenAPIRequest from '../../test-data/api_requests/Token_API_Request.json'
import putAPIRequest from '../../test-data/api_requests/PUT_API_Request.json'
import { getPOSTAPIRequestBody } from '../../src/utils/APIHelper';


test.use({ baseURL: process.env.BASE_API_URL })

test('Create PUT API Request', async ({ request }) => {

    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const totalPrice = faker.number.int({ min: 100, max: 1000 });

    const postAPIRequest = await getPOSTAPIRequestBody(firstName, lastName, totalPrice, true,
        "brkkieee", "2025-01-25", "2025-01-27");

    // Create POST API Request
    const postAPIResponse = await request.post(`/booking`, { data: postAPIRequest });

    // Print POST API Response
    const jsonPOSTAPIResponse = await postAPIResponse.json();
    console.log('POST API Response : ', JSON.stringify(jsonPOSTAPIResponse, null, 2));

    // Validating api response 
    expect(postAPIResponse.status()).toBe(200);
    expect(postAPIResponse.statusText()).toBe('OK');
    expect(postAPIResponse.headers()['content-type']).toContain('application/json');

    // Validate property/key names
    expect(jsonPOSTAPIResponse.booking).toHaveProperty('firstname');
    expect(jsonPOSTAPIResponse.booking).toHaveProperty('lastname');

    expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkin');
    expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkout');

    // Validate API response body
    expect(jsonPOSTAPIResponse.bookingid).toBeGreaterThan(0);
    expect(jsonPOSTAPIResponse.booking.firstname).toBe(firstName);
    expect(jsonPOSTAPIResponse.booking.lastname).toBe(lastName);

    expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe('2025-01-25');
    expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe('2025-01-27');

    // Create GET API request
    const bookingId = jsonPOSTAPIResponse.bookingid;
    console.log('Booking Id : ' + bookingId);

    const getAPIResponse = await request.get(`/booking/${bookingId}`);

    // Validate status code, status text
    expect(getAPIResponse.status()).toBe(200);
    expect(getAPIResponse.statusText()).toBe('OK');

    // Print GET API response
    const getAPIJSONResponse = await getAPIResponse.json();
    console.log(`GET API Response : `, JSON.stringify(getAPIJSONResponse, null, 2));

    // Generate token
    const tokenAPIResponse = await request.post(`/auth`, { data: tokenAPIRequest });

    // Validate status code, status text
    expect(tokenAPIResponse.status()).toBe(200);
    expect(tokenAPIResponse.statusText()).toBe('OK');

    const tokenAPIJSONResponse = await tokenAPIResponse.json();
    const token = tokenAPIJSONResponse.token;
    console.log('Token : ' + token);

    // Create PUT API Request
    const putAPIResponse = await request.put(`/booking/${bookingId}`, {
        headers: {
            'Content-Type': 'application/json',
            'Cookie': `token=${token}`
        },
        data: putAPIRequest,
    })

    // Validate status code, status text
    expect(putAPIResponse.status()).toBe(200);
    expect(putAPIResponse.statusText()).toBe('OK');

    // Print PUT API response
    const putAPIJSONResponse = await putAPIResponse.json();
    console.log(`PUT API Response : `, JSON.stringify(putAPIJSONResponse, null, 2))



})