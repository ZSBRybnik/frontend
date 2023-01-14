export type RawLoader = (
  argument: Omit<ThisObject, "async"> & {
    callback: null | Callback;
    source: string;
  },
) => void;

type CreateLoaderArguments = {
  rawLoader: RawLoader;
  async?: boolean;
};

type Callback = (error?: Error, result?: unknown) => void;

type ThisObject = {
  async: () => Callback;
  resourcePath: string;
};

type CreateLoader = (argument: CreateLoaderArguments) => void;

const createLoader: CreateLoader = ({
  rawLoader,
  async,
}: CreateLoaderArguments) => {
  const { async: callbackFunction, resourcePath } =
    // eslint-disable-next-line no-invalid-this
    this as unknown as ThisObject;
  const callback: null | Callback = async ? callbackFunction() : null;
  return (source: string) => {
    return rawLoader({
      callback,
      resourcePath,
      source,
    });
  };
};

export default createLoader;
