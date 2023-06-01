import { form } from "../types/form";
import { DropDownTypeB } from "./DropDownTypeB";
import { TextBoxTypeB } from "./TextBoxTypeB";
type Props = {
  onChangeValue: form.onChangeValueType;
};
export const TypeB = ({ onChangeValue }: Props) => {
  return (
    <>
      <DropDownTypeB onChangeValue={onChangeValue} />
      <br />
      <TextBoxTypeB onChangeValue={onChangeValue} />
    </>
  );
};
