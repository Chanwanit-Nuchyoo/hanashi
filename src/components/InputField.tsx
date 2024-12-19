import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";

interface Props {
  label: string;
  name: string;
  type: string;
  errors?: string[];
  required?: boolean;
}

export default function InputField({
  label,
  name,
  type,
  errors,
  required,
}: Props) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label className="text-md text-black" htmlFor={name}>
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      <Input
        type={type}
        id={name}
        name={name}
        placeholder={label}
        aria-describedby="email-error"
      />
      <div className="pl-6">
        <ul
          id="email-error"
          className="list-disc text-red-500 text-sm min-h-4 h-fit"
        >
          {errors?.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
