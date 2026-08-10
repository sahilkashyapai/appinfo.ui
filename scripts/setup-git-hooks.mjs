import { execSync } from "node:child_process";

try {
  execSync("git config core.hooksPath .githooks", { stdio: "inherit" });
  console.log("Git hooks path set to .githooks");
} catch {
  // Not a git repo (e.g. installed as a dependency) - nothing to do.
}
