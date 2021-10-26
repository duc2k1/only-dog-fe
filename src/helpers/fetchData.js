export default async function fetchData(
  method,
  endpoint,
  bodyData = {},
  accessToken = ""
) {
  try {
    const res = await fetch(
      import.meta.env.VITE_DOMAIN_API + endpoint,
      bodyData === {}
        ? {
            method,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(bodyData),
          }
        : {
            method,
            headers: {
              "Content-Type": "application/json",
            },
          }
    );
    const result = await res.json();
    return result;
  } catch (error) {
    return error;
  }
}
