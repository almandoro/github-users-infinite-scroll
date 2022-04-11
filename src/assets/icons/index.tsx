import { Icon, IconProps } from "@chakra-ui/react";
import { BsArrowRepeat, BsGithub } from "react-icons/bs";

export const GitHubLogoIcon = (props: IconProps) => (
  <Icon as={BsGithub} {...props} />
);

export const RepeatIcon = (props: IconProps) => (
  <Icon as={BsArrowRepeat} {...props} />
);
