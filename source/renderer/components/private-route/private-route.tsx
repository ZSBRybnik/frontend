import { decode } from "jsonwebtoken";
import { Navigate } from "react-router-dom";
import { create } from "zustand";
import Roles from "~backend/source/server/constants/roles/Roles";
import Routes from "~backend/source/server/trpc/constants/routes/routes";
import getDataFromStorage from "../../utils/getDataFromStorage/getDataFromStorage";
import { useQuery } from "../../utils/trpc-utilities/trpc-utilities";

export enum PrivateRouteRedirectActions {
  NoAction,
  RedirectToLoginPage,
  RedirectToPageNotFound,
}

type PrivateRouteProperties = {
  element: JSX.Element;
  whitelist: Set<Roles>;
  noAccessAction: PrivateRouteRedirectActions;
};

type RedirectActionState = {
  redirectAction: PrivateRouteRedirectActions | null;
  setRedirectAction: (value: PrivateRouteRedirectActions | null) => void;
};

const PrivateRoute = ({
  whitelist,
  noAccessAction,
  element,
}: PrivateRouteProperties) => {
  const useRedirectActionState = create<RedirectActionState>((set) => {
    return {
      redirectAction: null,
      setRedirectAction: (
        redirectAction: PrivateRouteRedirectActions | null,
      ) => {
        set(() => {
          return { redirectAction };
        });
      },
    };
  });
  const { redirectAction, setRedirectAction } = useRedirectActionState(
    ({ redirectAction, setRedirectAction }) => {
      return { redirectAction, setRedirectAction };
    },
  );
  const token = getDataFromStorage({ key: "token" }) as unknown as string;
  useQuery([Routes.VerifyToken as "getPost", { token }], {
    onSuccess: () => {
      const { role = "" } = Object(decode(token, { complete: true }));
      const hasAccess = whitelist.has(role);
      setRedirectAction(
        hasAccess ? PrivateRouteRedirectActions.NoAction : noAccessAction,
      );
    },
  });
  return redirectAction === PrivateRouteRedirectActions.NoAction ? (
    <>{element}</>
  ) : (
    <Navigate
      to={`/${
        redirectAction === PrivateRouteRedirectActions.RedirectToLoginPage
          ? "login"
          : "page-not-found"
      }`}
      replace
    />
  );
};
export default PrivateRoute;
