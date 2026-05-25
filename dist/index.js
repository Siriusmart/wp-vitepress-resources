import Processor from "webpan/dist/types/processor.js";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
const dir = path.dirname(fileURLToPath(import.meta.url));
export default class VitepressResourcesProcessor extends Processor {
    async build(content) {
        if (content !== "dir") {
            throw new Error("Bad rule: wp-vitepress-resources can only be used on directories.");
        }
        return {
            relative: new Map([
                [path.join(this.filePath(), "vp-script.js"), { buffer: await fs.readFile(path.join(dir, "../resources/script.js")), priority: this.settings().priority ?? 0 }],
                [path.join(this.filePath(), "vp-styles.css"), { buffer: await fs.readFile(path.join(dir, "../resources/styles.css")), priority: this.settings().priority ?? 0 }]
            ]),
        };
    }
}
//# sourceMappingURL=index.js.map