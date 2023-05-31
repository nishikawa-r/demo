import { form } from "../types/form";

type Props = {
  onChangekindValue: form.onChangekindValue;
};
export const KindDropdown = ({ onChangekindValue }: Props) => {
  return (
    <select
      onChange={(event) =>
        onChangekindValue((event.target.value as form.kindValueType) ?? "")
      }>
      <option value={""}>-----</option>
      <option value={"入力内容A"}>入力内容A</option>
      <option value={"入力内容B"}>入力内容B</option>
      <option value={"入力内容A+B"}>入力内容A+B</option>
    </select>
  );
};
