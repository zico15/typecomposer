export abstract class RouterGuard {
  constructor(public fallbackRoute: string = undefined) {}

  async beforeEach(): Promise<boolean> {
    return true;
  }
}
