// @ts-check

import { Command, Option } from "clipanion"
import execa from "execa"
import glob from "fast-glob"

/**
 * @type {glob.Options}
 */
const globOptions = {
  dot: true,
}

export class CountFiles extends Command {
  static paths = [["count"]]

  pattern = Option.String({ name: "pattern", required: true })

  async execute() {
    const files = await glob(this.pattern, globOptions)
    this.context.stdout.write(`${files.length} files matched ${this.pattern}`)
  }
}

export class Say extends Command {
  static paths = [["say"]]

  phrase = Option.String({ name: "phrase", required: false })

  async execute() {
    await execa("say", [this.phrase])
  }
}
