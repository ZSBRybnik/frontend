import Routes from "~backend/source/server/trpc/constants/routes/routes";
import { useParams } from "react-router-dom";
import useCallAPI from "~frontend/source/renderer/hooks/useCallAPI/useCallAPI";
import Page from "../../Page/Page";

const Profile = () => {
  const {
    name = "",
  }: Readonly<{
    name?: string;
  }> = useParams();
  useCallAPI({
    trpcRoute: Routes.GetProfile,
    indexName: "profiles_by_name",
    indexValue: name,
    trpcPayload: {
      name,
    },
    gunKey: "profiles",
  });
  return <Page />;
};
export default Profile;
