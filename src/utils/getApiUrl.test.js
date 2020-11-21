import { API_KEY, API_URL } from "../constants";
import getApiUrl from "./getApiUrl";

describe("getApiUrl", () => {
  it("should return gif categories if searchValue is empty", () => {
    const searchValue = "";
    const result = getApiUrl(searchValue);

    expect(result).toBe(`${API_URL}/categories?api_key=${API_KEY}`);
  });

  it("should return the result of the search if searchValue is not empty and offset > 0", () => {
    const searchValue = "turtle";
    const currentOffSet = 2;
    const result = getApiUrl(searchValue, currentOffSet);

    expect(result).toBe(
      `${API_URL}/search?q=${searchValue}&offset=${currentOffSet}&api_key=${API_KEY}`
    );
  });
});
