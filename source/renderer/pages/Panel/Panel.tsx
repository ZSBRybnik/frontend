import { useMemo } from "react";
import Roles from "~backend/source/server/constants/roles/Roles";
import Link from "../../components/Link/Link";
import Page from "../../components/Page/Page";
import useJwtStore from "../../stores/jwtStore/jwtStore";

const Panel = () => {
  const { jwtPayload } = useJwtStore();
  const { role } = useMemo(() => {
    return Object(jwtPayload);
  }, [jwtPayload]);
  return (
    <Page title="Panel">
      <Link
        external
        href="https://analytics.google.com/analytics/web/#/report-home/a107728956w232521366p218365039"
        box
        title="Google Analytics"
        target="_blank"
      />
      <Link
        external
        href="https://analytics.google.com/analytics/web/#/report-home/a107728956w232521366p218365039"
        box
        title="Hotjar"
        target="_blank"
      />
      <Link
        external
        href="https://analytics.google.com/analytics/web/#/report-home/a107728956w232521366p218365039"
        box
        title="FaunaDB"
        target="_blank"
      />
      {role === Roles.BuffetOwner && (
        <Link
          external
          href="https://dashboard.stripe.com/zsbrybnik/dashboard"
          box
          title="Stripe"
          target="_blank"
        />
      )}
    </Page>
  );
};

export default Panel;
