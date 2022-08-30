import { app, Menu, nativeImage, Tray } from "electron";
import { join } from "path";

const getTray = () => {
  const tray = new Tray(
    nativeImage.createFromPath(
      join(process.cwd(), "..", "..", "public", "icon.ico"),
    ),
  );
  tray.setToolTip("ZSB Rybnik");
  const trayContextMenuTemplate = [
    {
      label: "Zamknij",
      click: () => {
        app.quit();
      },
    },
  ];
  const trayContextMenu = Menu.buildFromTemplate(trayContextMenuTemplate);
  tray.setContextMenu(trayContextMenu);
};
export default getTray;
