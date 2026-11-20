import * as readline from "node:readline";
import { classifyRaw } from "./triangle";

const rl = readline.createInterface({ input: process.stdin });
const values: string[] = [];
const names = ["A", "B", "C"];

process.stdout.write(`Enter side ${names[0]}: `);

rl.on("line", (line) => {
  values.push(line);
  if (values.length < 3) {
    process.stdout.write(`Enter side ${names[values.length]}: `);
    return;
  }
  rl.close();
});

rl.on("close", () => {
  console.log(classifyRaw(values[0], values[1], values[2]));
});
