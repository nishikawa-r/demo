import { form } from "../types/form";
type Props = {
  onChangeValue: form.onChangeValueType;
};
export const DropDownTypeB = ({ onChangeValue }: Props) => {
  return (
    <select
      onChange={(event) =>
        onChangeValue(
          "typeBDropdown",
          (event.target.value as form.kindValueType) ?? ""
        )
      }
    >
      <option value={""}>-----</option>
      <option value={"B"}>B</option>
    </select>
  );
};
