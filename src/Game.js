export function observe(recieve) {
  setInterval(() => recieve([
    Math.floor(Math.random() * 8),
    Math.floor(Math.random() * 8)
  ]), 1000);
}
