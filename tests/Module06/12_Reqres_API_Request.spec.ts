import { test, expect } from '@playwright/test'

test.skip('Get users', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users?page=2');
    console.log(await response.json());
    expect(response.status()).toBe(200);
})

let userId: string; // Declare userId in the outer scope to share between tests

test('Create user', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users/',
        {
            data: {
                "name": "Kumar",
                "job": "QA"
            }
        });
    expect(response.status()).toBe(201);

    const res = await response.json();
    console.log(res);

    userId = res.id; // Assign to outer scoped variable
    console.log("Created User ID:", userId);

    // additional check
    expect(res).toHaveProperty("id");


})

test('Update user', async ({ request }) => {
    // Ensure userId is available before using it
    expect(userId).toBeDefined();
    const response = await request.post('https://reqres.in/api/users/'+userId,
        {
            data: {
                "name": "Kumar",
                "job": "AI"
            }
        });
    expect(response.status()).toBe(200);

    const res = await response.json();
    console.log(res);

})

test('Delete user', async ({request})=>{
    const res = await request.delete('https://reqres.in/api/users/'+userId);
    expect(res.status()).toBe(204);
})