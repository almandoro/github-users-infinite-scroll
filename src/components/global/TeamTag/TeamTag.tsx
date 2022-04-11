import { Tag } from "@chakra-ui/react";
import { FC } from "react";
import { calculateTeamTag } from "../../../services/utils/calculateTeamTag";

type TeamTagProps = {
  userId: number;
};

const TeamTag: FC<TeamTagProps> = ({ userId }) => {
  const team = calculateTeamTag(userId);
  if (!team) return null;

  return (
    <Tag
      color={`team.${team.toLocaleLowerCase()}.text`}
      bg={`team.${team.toLocaleLowerCase()}.bg`}
      fontSize="12px"
      lineHeight="12px"
      px="4px"
      py="2px"
      borderRadius="2px"
      minH="unset"
      minW="unset"
    >
      Team {team.toLocaleUpperCase()}
    </Tag>
  );
};

export default TeamTag;
