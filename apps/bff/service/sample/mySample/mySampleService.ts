export abstract class MySampleService {
  static getMySample(count: number): number[] {
    return new Array(count).fill(Math.random());
  }
}
