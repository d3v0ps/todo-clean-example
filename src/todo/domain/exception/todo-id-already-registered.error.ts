
export class TodoIdAlreadyRegisteredError extends Error {
  public static withString(
    todoId: string
  ): TodoIdAlreadyRegisteredError {
    return new TodoIdAlreadyRegisteredError(
      `Todo id already registered`,
    );
  }
}