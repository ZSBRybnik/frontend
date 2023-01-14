export type RawLoader = (
  argument: Omit<ThisObject, "async"> & {
    callback: null | Callback;
    source: string;
    meta: any;
    map: any;
  },
) => void;

type CreateLoaderArguments = {
  rawLoader: RawLoader;
  async?: boolean;
};

type Callback = (
  error?: Error | null,
  result?: unknown,
  map?: any,
  meta?: any,
) => void;

type ThisObject = {
  async: () => Callback;
  resourcePath: string;
};

type CreateLoader = (argument: CreateLoaderArguments) => void;

const createLoader: CreateLoader = ({
  rawLoader,
  async,
}: CreateLoaderArguments) => {
  // eslint-disable-next-line max-params
  return function (
    this: { async: () => Callback; resourcePath: string },
    source: string,
    map: any,
    meta: any,
  ) {
    const { async: callbackFunction, resourcePath } =
      // eslint-disable-next-line no-invalid-this
      this;
    const callback: null | Callback = async ? callbackFunction() : null;
    return rawLoader({
      callback,
      resourcePath,
      source,
      map,
      meta,
    });
  };
};

export default createLoader;
