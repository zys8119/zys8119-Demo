import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { bufferSplit } from "./a.ts";
bufferSplit;
console.log(
  Buffer.from("asbasd萨达啊手机打开阿什d顿库")
    .split("b")
    .map((i) => i.toString()),
);
