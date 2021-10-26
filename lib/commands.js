// @ts-check

import { Command, Option } from "clipanion"
import glob from "fast-glob"

/**
 * @type {glob.Options}
 */
const globOptions = {
  dot: true,
}

export class CountFiles extends Command {
  pattern = Option.String({ name: "pattern", required: true })

  async execute() {
    const files = await glob(this.pattern, globOptions)
    this.context.stdout.write(`${files.length} files matched ${this.pattern}`)
  }
}
