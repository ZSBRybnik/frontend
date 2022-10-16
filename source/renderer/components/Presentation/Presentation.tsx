import { PresentationBlock, PresentationWrapper } from "./Presentation.styles";

const Presentation = () => {
  return (
    <PresentationWrapper>
      <PresentationBlock>
        <span>Programiści:</span>
        <span>Krzysztof Zawisła</span>
        <span>Borys Malinowski</span>
        <span>Mateusz Perczak</span>
      </PresentationBlock>
    </PresentationWrapper>
  );
};
export default Presentation;
