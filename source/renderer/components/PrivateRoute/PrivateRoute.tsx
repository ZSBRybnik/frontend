import create from "zustand";
import Roles from "~backend/source/server/constants/roles/Roles";
import {
  Navigate,
  Route,
  PathRouteProps,
  LayoutRouteProps,
  IndexRouteProps,
} from "react-router-dom";
import { useQuery } from "../AppProvider/AppProvider";
import Routes from "~backend/source/server/trpc/constants/routes/routes";
import getDataFromStorage from "../../utils/getDataFromStorage/getDataFromStorage";
import { decode } from "jsonwebtoken";

export enum PrivateRouteRedirectActions {
  NoAction,
  RedirectToLoginPage,
  RedirectToPageNotFound,
}

type PrivateRouteProperties = (
  | PathRouteProps
  | LayoutRouteProps
  | IndexRouteProps
) & {
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
  ...rest
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
  const renderOutput =
    redirectAction === PrivateRouteRedirectActions.NoAction ? (
      <Route {...rest} />
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
  return <>{redirectAction && renderOutput}</>;
};
export default PrivateRoute;
