import { Box } from "../Box";
import { Input, Label } from "../forms";

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Field({ label, ...rest }: FieldProps) {
  return (
    <Box flexbox direction="column">
      {label && <Label htmlFor={rest.id}>{label}</Label>}
      <Input {...rest} />
    </Box>
  );
}
