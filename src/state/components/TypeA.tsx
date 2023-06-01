import { form } from "../types/form";
import { DropDownTypeA } from "./DropDownTypeA";
import { TextBoxTypeA } from "./TextBoxTypeA";
type Props = {
  onChangeValue: form.onChangeValueType;
};
export const TypeA = ({ onChangeValue }: Props) => {
  return (
    <>
      <DropDownTypeA onChangeValue={onChangeValue} />
      <br />
      <TextBoxTypeA onChangeValue={onChangeValue} />
    </>
  );
};
