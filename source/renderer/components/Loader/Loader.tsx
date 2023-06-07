import type { FunctionComponent } from "react";
import {
  AnimatedLoader,
  LoaderWrapper,
  StyledLoader,
} from "~frontend/source/renderer/components/Loader/Loader.styles";

const Loader: FunctionComponent = (): JSX.Element => {
  return (
    <StyledLoader>
      <LoaderWrapper>
        <AnimatedLoader
          initial={{ width: 0, x: 0 }}
          animate={{ width: [0, 150, 150], x: [0, 0, 150] }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        />
      </LoaderWrapper>
    </StyledLoader>
  );
};

export default Loader;
