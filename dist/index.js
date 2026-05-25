"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fs = require("node:fs/promises");
const webpan = require("webpan");
class VitepressResourcesProcessor extends webpan.Processor {
    async build(content) {
        if (content !== "dir") {
            throw new Error("Bad rule: wp-vitepress-resources can only be used on directories.");
        }
        return {
            relative: new Map([
                [path.join(this.filePath(), "vp-script.js"), { buffer: await fs.readFile(path.join(__dirname, "../resources/script.js")), priority: this.settings().priority ?? 0 }],
                [path.join(this.filePath(), "vp-styles.css"), { buffer: await fs.readFile(path.join(__dirname, "../resources/styles.css")), priority: this.settings().priority ?? 0 }]
            ]),
        };
    }
}
exports.default = VitepressResourcesProcessor;
//# sourceMappingURL=index.js.map