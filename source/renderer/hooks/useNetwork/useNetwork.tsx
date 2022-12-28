/* eslint-disable no-empty */
import Push from "push.js";
import { useEffect } from "react";
import { useNetworkState } from "react-use";

const useNetwok = () => {
  const { online } = useNetworkState();
  useEffect(() => {
    (async () => {
      const pushTitle = online
        ? "O, widzę, że wróciłeś do żywych!"
        : "Twoje połączenie internetowe zostało zerwane 😭";
      const pushMessage = online
        ? "Teraz możesz znów spokojnie przeglądać treści online"
        : "Nie będziesz miał dostępu do wszystkich treści do póki nie staniesz się ponownie online";
      try {
        await Push.create(pushTitle, { body: pushMessage });
      } catch {}
    })();
  }, [online]);
};
export default useNetwok;
