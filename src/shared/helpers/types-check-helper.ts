export const isErrorWithFields = (
  error: unknown,
  requiredFields: string[] = [],
): error is { [key: string]: any } => {
  if (typeof error === "string") {
    return requiredFields.length === 0;
  }

  if (typeof error === "object" && error !== null) {
    return requiredFields.every((field) => field in error);
  }

  return false;
};
