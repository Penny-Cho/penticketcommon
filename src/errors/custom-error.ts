export abstract class CustomError extends Error {
  abstract statusCode: number;

  //message is just for the logs
  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): { message: string; field?: string }[];
}
