import { mdiArrowDownBold, mdiArrowUpBold } from "@mdi/js";
import Icon from "@mdi/react";
import { FC } from "react";
import {
  CollapseContent,
  CollapseTopWrapper,
  CollapseWrapper,
} from "~frontend/source/renderer/components/Collapse/Collapse.styles";
import { CollapseProperties } from "~frontend/source/renderer/components/Collapse/Collapse.types";
import useState from "../../hooks/useState/useState";

const Collapse: FC<CollapseProperties> = ({
  collapseText,
}: CollapseProperties): JSX.Element => {
  const { value: isOpen, setValue: setIsOpen } = useState({
    value: false,
  });
  return (
    <CollapseWrapper>
      <CollapseTopWrapper
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span>{collapseText}</span>
        <Icon
          path={isOpen ? mdiArrowUpBold : mdiArrowDownBold}
          color="#111"
          size={1}
        />
      </CollapseTopWrapper>
      <CollapseContent
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: {
            height: "auto",
          },
          closed: {
            height: 0,
          },
        }}
        transition={{
          type: "spring",
          duration: 5,
        }}
      >
        content
      </CollapseContent>
    </CollapseWrapper>
  );
};

export default Collapse;
