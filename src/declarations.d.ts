declare module "attheme-preview" {
  import { JSDOM } from "jsdom";

  namespace Preview {
    const IMAGE_KEY: unique symbol;

    interface Color {
      red: number;
      green: number;
      blue: number;
      alpha: number;
    }

    interface Theme {
      [key: string]: Color;
      [IMAGE_KEY]?: string;
    }

    interface VariableHandler {
      (theme: Theme, params: any): Promise<Color | string>;
    }

    interface CustomHandler {
      (preview: JSDOM, theme: Theme, params: any): Promise<void>;
    }
  }

  class Preview {
    constructor();

    setVariableHandler(name: string | symbol, handler: Preview.VariableHandler): void;
    addCustomHandler(handler: Preview.CustomHandler): void;
    makePrev(theme: Buffer, template: string): Promise<Buffer>;
  }

  export = Preview;
}

declare module "attheme-preview/handlers" {
  import { JSDOM } from "jsdom";
  import { VariableHandler, CustomHandler } from "attheme-preview";

  export const randomWallpaperHandler: VariableHandler;
  export const chat_walpapperHandler: CustomHandler;
}
