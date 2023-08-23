
export class Router {
  requests = []

  request(method, path, fn = (() => { })) {
    this.requests.push({ method, path, fn })
    return this
  }

  post(path, fn = (() => { })) {
    return this.request('POST', path, fn)
  }

  all(path, fn = (() => { })) {
    return this.request('*', path, fn)
  }

  handle(req) {
    return new Response('That\'s all OK!')
  }
}
