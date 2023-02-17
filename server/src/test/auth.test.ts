describe("Authentication", () => {
  it.todo("POST /login - should return 200 and JWT if user is authenticated");
  it.todo("POST /login - should return 401 if user is not authenticated");
  it.todo("POST /register - should return 201 if user is registered");
  it.todo("POST /register - should return 400 if user is already registered");

  describe("Github OAuth", () => {
    it.todo("GET /auth/github - should return 302");
  });
});
