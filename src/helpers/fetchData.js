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
              Authorization: "Beaer " + accessToken,
            },
            body: JSON.stringify(bodyData),
          }
        : {
            method,
            headers: {
              "Content-Type": "application/json",
              Authorization: "Beaer " + accessToken,
            },
          }
    );
    const result = await res.json();
    return result;
  } catch (error) {
    return error;
  }
}
