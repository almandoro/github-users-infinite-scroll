import { SimpleGridProps, Skeleton } from "@chakra-ui/react";
import { FC } from "react";
import ListGrid from "./ListGrid";

type ListLoaderProps = {
  isLoaded: boolean;
  containerProps?: SimpleGridProps;
};

const ListLoader: FC<ListLoaderProps> = ({ isLoaded, containerProps }) => {
  return (
    <ListGrid {...containerProps}>
      <Skeleton p={10} isLoaded={isLoaded} />
      <Skeleton isLoaded={isLoaded} />
      <Skeleton isLoaded={isLoaded} />
    </ListGrid>
  );
};

export default ListLoader;
