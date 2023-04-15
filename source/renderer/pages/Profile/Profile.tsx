import { useParams } from "react-router-dom";
import Routes from "~backend/source/server/trpc/constants/routes/routes";
import {
  ProfilePicture,
  ProfilePictureWrapper,
  Username,
} from "~frontend/source/renderer/pages/Profile/Profile.styles";
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
    indexName: "users_by_name",
    indexValue: name,
    trpcPayload: {
      name,
    },
    gunKey: "profiles",
  });
  return (
    <Page>
      <ProfilePictureWrapper>
        <ProfilePicture
          src="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMGVsZXBoYW50fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt="test"
          loading="lazy"
        />
      </ProfilePictureWrapper>
      <Username>{name}</Username>
    </Page>
  );
};
export default Profile;
