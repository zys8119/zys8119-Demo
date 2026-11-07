import ollama from "ollama";
import { execSync } from "child_process";

(async () => {
  const cwd = process.cwd();
  const response = ollama.chat({
    model: "m5",
    stream: true,
    think: false,
    messages: [
      {
        role: "user",
        content: `
        当前项目路径:${cwd}
        请读取文件"algo.ts"的内容,
        请直接返回工具或命令脚本,不要回答其他问题,
        优先使用shell脚本,如果不能使用shell脚本,请使用node脚本
        如果是文件内容相关读取,请直接返回文件内容,不要输出到其他文件
        返回的shell脚本内容实用标签包裹,格式如下:
    `,
      },
    ],
  });
  let script = "";
  for await (const chunk of await response) {
    if (chunk.message.thinking) {
      process.stdout.write(chunk.message.thinking);
    } else {
      process.stdout.write(chunk.message.content);
      script += chunk.message.content;
    }
  }
  const code = (script.match(/`{3}.*\n((.|\n)*)\n`{3}/) as any)?.[1];
  if (!code) {
    console.log("未找到代码");
    return;
  }
  console.log("================");
  console.log(code);
  console.log("================");

  console.log(execSync(code).toString());
})().catch(console.error);
