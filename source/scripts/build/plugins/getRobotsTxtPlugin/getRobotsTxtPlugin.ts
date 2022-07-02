import RobotstxtPlugin from "robotstxt-webpack-plugin";
import ExtendedMode from "~scripts/build/types/extendedMode/extendedMode";

type GetRobotTxtPluginArguments = {
  targetToModern: boolean;
  extendedMode: ExtendedMode;
};

const getRobotTxtPlugin = ({
  targetToModern,
  extendedMode,
}: GetRobotTxtPluginArguments) => {
  if (targetToModern && extendedMode === ExtendedMode.Web) {
    return new RobotstxtPlugin({
      filePath: "../../robots.txt",
    });
  } else {
    return;
  }
};

export default getRobotTxtPlugin;
