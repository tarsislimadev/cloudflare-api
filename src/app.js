
const server = {
  count: 0,
  async fetch() {
    return new Response(`datetime: ${++server.count}`)
  }
}

export default server
