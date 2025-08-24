import { test, expect } from '@playwright/test';
import postAPIRequest from '../../test-data/api_requests/Static_POST_API_Request.json';

test.use({ baseURL: process.env.BASE_API_URL, })

test('Create POST API Request using static file', async ({ request }) => {

    // Create POST API Request
    const postAPIResponse = await request.post(`/booking`, { data: postAPIRequest });

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
    expect(jsonPOSTAPIResponse.booking.firstname).toBe('Sanjay');
    expect(jsonPOSTAPIResponse.booking.lastname).toBe('Kumar');

    expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe('2025-01-15');
    expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe('2025-01-17');

})