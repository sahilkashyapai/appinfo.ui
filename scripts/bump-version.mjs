import { readFileSync, writeFileSync } from "node:fs";

const pkgPath = new URL("../package.json", import.meta.url);
const raw = readFileSync(pkgPath, "utf8");
const pkg = JSON.parse(raw);

const [major, minor, patch] = pkg.version.split(".").map(Number);
pkg.version = `${major}.${minor}.${patch + 1}`;

const trailingNewline = raw.endsWith("\n") ? "\n" : "";
writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}${trailingNewline}`);

console.log(`Version bumped to ${pkg.version}`);
