import { Button, VStack } from "@chakra-ui/react";
import { AxiosError } from "axios";
import { FC } from "react";
import { RepeatIcon } from "../../../assets/icons";
import ErrorMessage from "./ErrorMessage";

type ErrorHandlerProps = {
  customMessage?: string;
  error: AxiosError | null;
  isRetrying?: boolean;
  onRetry?: () => void;
};

const ErrorHandler: FC<ErrorHandlerProps> = ({
  customMessage,
  error,
  isRetrying,
  onRetry,
}) => {
  if (!error) return null;
  return (
    <VStack position="sticky" top={0} zIndex={1} py={2}>
      <ErrorMessage opacity={isRetrying ? 0.3 : 1}>
        {customMessage || error?.message}
      </ErrorMessage>
      {!!onRetry && (
        <Button
          size="md"
          colorScheme="green"
          border="2px solid"
          borderColor="green.300"
          leftIcon={<RepeatIcon color="green.100" boxSize="28px" />}
          isLoading={isRetrying}
          onClick={onRetry}
        >
          Refetch
        </Button>
      )}
    </VStack>
  );
};

export default ErrorHandler;
