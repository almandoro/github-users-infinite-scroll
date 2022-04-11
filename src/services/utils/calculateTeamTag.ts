import Team from "../../types/Team";

export const calculateTeamTag = (userId: number): string | undefined => {
  if (userId <= 0) return undefined;
  if (userId % 12 === 0) return Team.C;
  if (userId % 4 === 0) return Team.A;
  if (userId % 6 === 0) return Team.B;
  return undefined;
};
