// src/mock/stream.ts
export function mockStream(
  text: string,
  onChunk: (chunk: string) => void,
  onDone: () => void
) {
  let i = 0;
  const interval = setInterval(() => {
    onChunk(text[i]);
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      onDone();
    }
  }, 25);
};
