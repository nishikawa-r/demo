import { form } from "../types/form";
type Props = {
  onChangeValue: form.onChangeValueType;
};
export const TextBoxTypeB = ({ onChangeValue }: Props) => {
  return (
    <input
      type="text"
      onChange={(event) =>
        onChangeValue("typeBTextBox", event.target.value ?? "")
      }
    />
  );
};
