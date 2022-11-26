import { useEffect } from "react";
import { fromEvent, debounceTime } from "rxjs";
import useDeviceBreakpointsStore from "../../stores/deviceBreakpointsStore/deviceBreakpointsStore";

const useWindowDimensionsListener = () => {
  const { setValue: setDeviceBreakpointsStore } = useDeviceBreakpointsStore();
  useEffect(() => {
    const subscription = fromEvent(window, "resize")
      .pipe(debounceTime(100))
      .subscribe(() => {
        setDeviceBreakpointsStore(
          window.innerWidth < 768
            ? "mobile"
            : window.innerWidth < 1024
            ? "tablet"
            : "desktop",
        );
      });
    return subscription.unsubscribe;
  }, []);
};
export default useWindowDimensionsListener;
