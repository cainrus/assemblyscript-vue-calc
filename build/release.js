async function instantiate(module, imports = {}) {
  const { exports } = await WebAssembly.instantiate(module, imports);
  return exports;
}
export const {
  add
} = await (async url => instantiate(
  await (
    globalThis.fetch && globalThis.WebAssembly.compileStreaming
      ? globalThis.WebAssembly.compileStreaming(globalThis.fetch(url))
      : globalThis.WebAssembly.compile(await (await import("node:fs/promises")).readFile(url))
  ), {
  }
))(new URL("release.wasm", import.meta.url));
