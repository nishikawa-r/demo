import { form } from "../types/form";
type Props = {
  onChangeValue: form.onChangeValueType;
};
export const TextBoxTypeA = ({ onChangeValue }: Props) => {
  return (
    <input
      type="text"
      onChange={(event) =>
        onChangeValue("typeATextBox", event.target.value ?? "")
      }
    />
  );
};
