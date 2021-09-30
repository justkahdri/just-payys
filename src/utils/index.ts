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

export const getCurrentDate = () => {
  let now = new Date();
  const offset = now.getTimezoneOffset();

  now = new Date(now.getTime() - offset * 60 * 1000);

  return now.toISOString().substring(0, 10);
};

type ParseErrorFunction = (func: () => Promise<void>) => Promise<UseToastOptions | undefined>;

export const parseError: ParseErrorFunction = async (func) => {
  try {
    await func();
  } catch ({message, name}) {
    return {
      description: message as string,
      title: name as string,
      status: "error",
      isClosable: true,
    };
  }
};
