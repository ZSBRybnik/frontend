import { useParams } from "react-router-dom";
import Routes from "~backend/source/server/trpc/constants/routes/routes";
import Page from "../../components/Page/Page";
import useCallAPI from "../../hooks/useCallAPI/useCallAPI";

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
  return <Page></Page>;
};
export default Profile;
