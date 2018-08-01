import "colors";
import args from "./args";
import * as fs from "fs";
import Preview = require("attheme-preview");

if (!args.themePath.endsWith(`.attheme`)) {
  args.themePath += `.attheme`;
}

if (!args.outputPath.endsWith(`.png`)) {
  args.outputPath += `.png`;
}

if (!args.templatePath.endsWith(`.svg`)) {
  args.templatePath += `.svg`;
}

const theme = fs.readFileSync(args.themePath);
const template = fs.readFileSync(args.templatePath, `utf-8`);

const preview = new Preview();

preview.makePrev(theme, template)
  .then((imageContents) => {
    fs.writeFileSync(args.outputPath, imageContents);
    console.error(`Successfully created the preview!`.green);
  })
  .catch((error) => {
    console.error(
      `Whops, there was an error during preview generation. It says:`.red,
    );
    console.error(error);
    process.exit(1);
  });
