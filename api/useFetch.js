export const useFetch = async (params, httpMethod, route) => {
  try {
    const response = await fetch(`http://localhost:2222/${route}`, {
      method: httpMethod,
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: httpMethod !== "GET" ? JSON.stringify(params) : null,
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else if (response.status >= 400) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Something went wrong. Please check your network/server or try again later.");
    }
  } catch (err) {}
};
