import { useEffect } from "react";
import { fromEvent } from "rxjs";

const useCopy = () => {
  useEffect(() => {
    const subscription = fromEvent(window, "copy").subscribe(
      (event: Event): void => {
        if (event instanceof ClipboardEvent) {
          const selection: Selection | null = document.getSelection();
          const modifiedSelection: string = selection
            ? `${selection.toString()}\n\nZawartość została skopiowana ze strony Zespołu Szkół Budowlanych w Rybniku \u00a9. Wszystkie prawa zastrzeżone.`
            : "";
          event.clipboardData?.setData("text/plain", modifiedSelection);
          event.preventDefault();
        }
      },
    );
    return (): void => {
      subscription.unsubscribe();
    };
  }, []);
};
export default useCopy;
