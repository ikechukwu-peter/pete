import React, { ReactNode } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/react";

export const FormField = ({
  error,
  label,
  children,
  helper,
  isRequired,
  isReadOnly,
}: {
  error?: string;
  label?: string;
  children: ReactNode;
  helper?: string;
  isRequired?: boolean;
  isReadOnly?: boolean;
}) => {
  return (
    <FormControl
      isInvalid={!!error}
      isRequired={isRequired}
      isReadOnly={isReadOnly}
    >
      {label && <FormLabel color={"brand.300"}>{label}</FormLabel>}
      {children}
      {helper && <FormHelperText>{helper}</FormHelperText>}
      {!!error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};
