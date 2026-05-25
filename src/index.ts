import path = require("path");
import fs = require("node:fs/promises");
import webpan = require("webpan")
import type { ProcessorOutputRaw } from "webpan/dist/types/processorStates";


export default class VitepressResourcesProcessor extends webpan.Processor {
    async build(content: Buffer | "dir"): Promise<ProcessorOutputRaw> {
        if (content !== "dir") {
            throw new Error("Bad rule: wp-vitepress-resources can only be used on directories.")
        }

        return {
            relative: new Map([
                [path.join(this.filePath(), "vp-script.js"), { buffer: await fs.readFile(path.join(__dirname, "../resources/script.js")), priority: this.settings().priority ?? 0 }],
                [path.join(this.filePath(), "vp-styles.css"), { buffer: await fs.readFile(path.join(__dirname, "../resources/styles.css")), priority: this.settings().priority ?? 0 }]
            ]),
        }
    }
}
