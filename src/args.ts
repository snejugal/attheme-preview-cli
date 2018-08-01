import { ArgumentParser } from "argparse";
import * as path from "path";

interface Arguments {
  themePath: string;
  outputPath: string;
  templatePath: string;
}

const parser = new ArgumentParser({
  addHelp: true,
});

parser.addArgument(`themePath`);
parser.addArgument(`outputPath`);
parser.addArgument([`-t`, `--template`], {
  defaultValue: path.join(__dirname, `../resources/template.svg`),
  dest: `templatePath`,
});

const args: Arguments = parser.parseArgs();

export default args;
export {
  Arguments,
};
