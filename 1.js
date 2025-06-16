export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)
    const target = 'https://chatgpt.com/' // 🔁 Replace with your target site

    const targetUrl = target + url.pathname + url.search
    const modifiedRequest = new Request(targetUrl, request)
    return fetch(modifiedRequest)
  }
}
