
export class InvalidIdError extends Error {
  public static withString(value: string): InvalidIdError {
    return new InvalidIdError(`${value} is not a valid uuid v4.`);
  }
}