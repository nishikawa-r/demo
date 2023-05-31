import { useEffect, useState } from "react";
import { form } from "../types/form";
import { KindDropdown } from "./KindDropdown";
import { SaveButton } from "./SaveButton";

export const VisibleForm = () => {
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
  const onChangeValue = (type: form.argType, value: string) => {
    switch (type) {
      case "typeADropdown":
        SetValue((obj) => {
          const newObj = { ...obj };
          newObj.typeADropdownValue = value;
          return newObj;
        });
        break;
      case "typeBDropdown":
        SetValue((obj) => {
          const newObj = { ...obj };
          newObj.typeBDropdownValue = value;
          return newObj;
        });
        break;
      default:
        break;
    }
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
