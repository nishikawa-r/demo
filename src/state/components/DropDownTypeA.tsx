import { form } from "../types/form";
type Props = {
  onChangeValue: form.onChangeValueType;
};
export const DropDownTypeA = ({ onChangeValue }: Props) => {
  return (
    <select 
      
      onChange={(event) =>
        onChangeValue("typeADropdown", event.target.value ?? "")
      }
    >
      <option value={""}>-----</option>
      <option value={"A"}>A</option>
    </select>
  );
};
