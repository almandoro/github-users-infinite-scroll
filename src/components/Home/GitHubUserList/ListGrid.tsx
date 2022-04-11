import { SimpleGrid, SimpleGridProps } from "@chakra-ui/react";
import React, { FC } from "react";

const ListGrid: FC<SimpleGridProps> = ({ children, ...rest }) => {
  return (
    <SimpleGrid gridGap="30px" columns={{ base: 1, sm: 2, md: 3 }} {...rest}>
      {children}
    </SimpleGrid>
  );
};

export default ListGrid;
