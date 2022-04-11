import { Box, Link, Divider } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { FC } from "react";
import UserBaseCard, { UserBaseCardProps } from "./UserBaseCard";
import AppRoute from "../../../types/AppRoute";

const UserListCard: FC<UserBaseCardProps> = ({ ...rest }) => {
  return (
    <Box bg="white" borderRadius="4px">
      <UserBaseCard {...rest} />
      <Divider />
      <Box py="12px" textAlign="center">
        <Link
          as={ReactLink}
          to={AppRoute.UserDetailsPage.replace(
            ":username",
            rest.userLogin.toString(),
          )}
          color="pressable"
          fontWeight="500"
        >
          Details
        </Link>
      </Box>
    </Box>
  );
};

export default UserListCard;
