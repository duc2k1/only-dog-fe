export default function postData(endpoint = "", headers = {}, body = {}) {
  return fetch(import.meta.env.VITE_DOMAIN_API + endpoint, {
    headers,
    body,
  });
}
