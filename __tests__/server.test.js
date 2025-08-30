const request = require("supertest");
const server = require("../src/server");

afterAll(() => server.close());

test("GET /health -> 200 ok", async () => {
  const res = await request(server).get("/health");
  expect(res.status).toBe(200);
  expect(res.text).toBe("ok");
});

test("GET / -> 200 {ok:true}", async () => {
  const res = await request(server).get("/");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({ ok: true });
});
