import React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  useColorMode,
} from "@chakra-ui/react";

const FormField = ({
  error,
  label,
  children,
  helper,
  isRequired,
  isReadOnly,
}) => {
  const { colorMode } = useColorMode();
  return (
    <FormControl
      isInvalid={!!error}
      isRequired={isRequired}
      isReadOnly={isReadOnly}
    >
      {label && (
        <FormLabel color={colorMode === "light" ? "theme.500" : "theme.100"}>
          {label}
        </FormLabel>
      )}
      {children}
      {helper && <FormHelperText>{helper}</FormHelperText>}
      {!!error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

export default FormField;
