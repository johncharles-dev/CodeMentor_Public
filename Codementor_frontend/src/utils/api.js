// utils/api.js

export async function fetchCodeService(endpoint, code) {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });

    const data = await response.json();
    if (data.result) return data.result;
    if (data.error) return ` Error: ${data.error}`;
    return " Unexpected response.";
  } catch (err) {
    return ` Network error: ${err.message}`;
  }
}
