declare module "attheme-preview" {
  class Preview {
    constructor();

    makePrev(theme: Buffer, template: string): Promise<Buffer>;
  }

  export = Preview;
}
