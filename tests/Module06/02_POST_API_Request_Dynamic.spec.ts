import { test, expect } from '@playwright/test'

import { formatAPIRequest } from '../../src/utils/APIHelper';
import path from 'path';
import fs from 'fs';

test.use({ baseURL: process.env.BASE_API_URL })

test('Create POST API Request using dynamic file', async ({ request }) => {

    // Reading the json file
    const filePath = path.join(__dirname, '../../test-data/api_requests/Dynamic_POST_API_Request.json')
    const jsonTemplate = fs.readFileSync(filePath, 'utf-8');

    const values = ['Sanjay007', 'Kumar007', 5000, 'Laptop'];

    // Updating POST API Request body
    const postAPIRequest = await formatAPIRequest(jsonTemplate, values);

    // Create POST API Request
    const postAPIResponse = await request.post(`/booking`, { data: JSON.parse(postAPIRequest) });

    // Print JSON API Response
    const jsonPOSTAPIResponse = await postAPIResponse.json();
    console.log(`POST API Response : ` + JSON.stringify(jsonPOSTAPIResponse, null, 2));

    // Validating API Response
    expect(postAPIResponse.status()).toBe(200);
    expect(postAPIResponse.statusText()).toBe('OK');
    expect(postAPIResponse.headers()['content-type']).toContain('application/json');

    // Validate property/key names
    expect(jsonPOSTAPIResponse.booking).toHaveProperty('firstname');
    expect(jsonPOSTAPIResponse.booking).toHaveProperty('lastname');

    expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkin');
    expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkout');

    // Validate API Response body
    expect(jsonPOSTAPIResponse.bookingid).toBeGreaterThan(0);
    expect(jsonPOSTAPIResponse.booking.firstname).toBe('Sanjay007');
    expect(jsonPOSTAPIResponse.booking.lastname).toBe('Kumar007');

    expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe('2025-01-15');
    expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe('2025-01-17');
})