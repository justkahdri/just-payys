import {UseToastOptions} from "@chakra-ui/react";

export class CustomError extends Error {
  constructor(name: string, message: string) {
    // Passes the necessary arguments (including the specified by the provider) to the constructor.
    super(message);

    // Maintains an adequate follow of the stack where the error occurred (only available in V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    this.name = name;
  }
}

type ParseErrorFunction = (name: string, message: string) => UseToastOptions;

export const parseError: ParseErrorFunction = (name, message) => ({
  description: message as string,
  title: name as string,
  status: "error",
  isClosable: true,
});
