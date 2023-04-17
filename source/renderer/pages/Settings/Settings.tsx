import { Row } from "~frontend/source/renderer/pages/Settings/Settings.styles";
import Page from "../../components/Page/Page";
import Switch from "../../components/Switch/Switch";
import useState from "../../hooks/useState/useState";

const Settings = () => {
  const { value, setValue } = useState<{
    value: boolean;
  }>({
    value: false,
  });
  return (
    <Page>
      <Row>
        Enable Broadcasting Center
        <Switch
          checked={value}
          onClick={() => {
            setValue(!value);
          }}
        />
      </Row>
    </Page>
  );
};

export default Settings;
