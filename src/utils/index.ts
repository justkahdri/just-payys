import {UseToastOptions} from "@chakra-ui/react";

export class CustomError extends Error {
  constructor(name: string, message: string) {
    // Pasa los argumentos restantes (incluidos los específicos del proveedor) al constructor padre
    super(message);

    // Mantiene un seguimiento adecuado de la pila para el lugar donde se lanzó nuestro error (solo disponible en V8)
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
