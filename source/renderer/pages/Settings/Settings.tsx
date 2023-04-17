import { Row } from "~frontend/source/renderer/pages/Settings/Settings.styles";
import useUserSettingsStore from "~frontend/source/renderer/stores/userSettingsStore/userSettingsStore";
import Page from "../../components/Page/Page";
import Switch from "../../components/Switch/Switch";

const Settings = () => {
  const {
    settings: { enableBroadcastCenter },
    setSettings,
  } = useUserSettingsStore();
  return (
    <Page>
      <Row>
        Enable Broadcasting Center
        <Switch
          checked={enableBroadcastCenter}
          onClick={() => {
            setSettings({ enableBroadcastCenter: !enableBroadcastCenter });
          }}
        />
      </Row>
    </Page>
  );
};

export default Settings;
