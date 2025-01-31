const API = require("../testClass");
jest.mock("../testClass", () => {
  return jest.fn().mockImplementation(() => {
    return {
      todos: () => Promise.resolve([1, 2, 3, 4, 5]),
    };
  });
});

describe("Test api", () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    API.mockClear();
  });

  it("Should get 5 todos", async () => {
    //     const api = new API("https://jsonplaceholder.typicode.com/");
    //     const res = await api.todos();
    //     console.log(res);
    //     expect(res.length).toBe(5);
  });

  it("We can check if the consumer called the class constructor", () => {
    const api = new API("https://jsonplaceholder.typicode.com/");
    api.todos().then((res) => {
      console.log(res);
    });
    expect(API).toHaveBeenCalledTimes(1);
  });
});
