import { useEffect, useState } from "react";
import { form } from "../types/form";
import { KindDropdown } from "./KindDropdown";
import { SaveButton } from "./SaveButton";
export const UnVisibleForm = () => {
  const [isSavable, setIsSavable] = useState<boolean>(false);
  const [value, SetValue] = useState<form.inputObjType>({
    kindValue: "",
    typeADropdownValue: "",
    typeATextBoxValue: "",
    typeBDropdownValue: "",
    typeBTextBoxValue: "",
  });
  const onChangekindValue = (value: form.kindValueType) => {
    SetValue((obj) => {
      const newObj = { ...obj };
      newObj.kindValue = value;
      return newObj;
    });
  };
  useEffect(() => {
    setIsSavable(value.kindValue != "" ? true : false);
  }, [value]);
  return (
    <>
      <KindDropdown onChangekindValue={onChangekindValue} />
      <br />
      <SaveButton isSavable={isSavable} />
    </>
  );
};
