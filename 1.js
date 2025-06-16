addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  const target = 'https://chatgpt.com/'  // Replace with the blocked domain
  const newUrl = target + url.pathname + url.search
  const modifiedRequest = new Request(newUrl, {
    method: request.method,
    headers: request.headers,
    body: request.body
  })
  return fetch(modifiedRequest)
}
