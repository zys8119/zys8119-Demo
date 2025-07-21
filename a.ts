import hls from "highlight.js";
const code = `
function aa<T>():T

aa<{
    a:string
    b:number
}>("<asa>")
`;
hls.registerLanguage("aaa", (hljs) => {
  return {
    name: "AAA",
    contains: [
      {
        className: "keyword",
        begin: /function.*/,
        contains: [
          {
            className: "aaa",
            begin: /function/,
          },
          {
            className: "bbb",
            begin: /\saa/,
          },
        ],
        // returnBegin: true,
        end: /T/,
      },
    ],
  };
});
console.log(hls.highlight(code, { language: "aaa" }).value);
