import { PresentationBlock, PresentationWrapper } from "./Presentation.styles";

const Presentation = () => {
  return (
    <PresentationWrapper>
      <PresentationBlock>
        Programiści: <div>Krzysztof Zawisła</div>
        <div>Borys Malinowski</div>
      </PresentationBlock>
    </PresentationWrapper>
  );
};
export default Presentation;
