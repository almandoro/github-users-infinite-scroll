import { useParams } from "react-router";
import UserDetailsCard from "../components/global/Card/UserDetailsCard/UserDetailsCard";
import Main from "../components/global/Main";

type PageParams = {
  username: string;
};

const UserDetailsPage = () => {
  const { username } = useParams<PageParams>();

  return (
    <Main>
      <UserDetailsCard username={username} />
    </Main>
  );
};

export default UserDetailsPage;
