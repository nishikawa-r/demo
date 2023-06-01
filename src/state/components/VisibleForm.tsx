import { useEffect, useState } from "react";
import { form } from "../types/form";
import { KindDropdown } from "./KindDropdown";
import { SaveButton } from "./SaveButton";
import { TypeA } from "./TypeA";
import { TypeB } from "./TypeB";

export const VisibleForm = () => {
  const [isSavable, setIsSavable] = useState<boolean>(false);
  const typeA = ["入力内容A", "入力内容A+B"];
  const typeB = ["入力内容B", "入力内容A+B"];
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
      case "typeATextBox":
        SetValue((obj) => {
          const newObj = { ...obj };
          newObj.typeATextBoxValue = value;
          return newObj;
        });
        break;
      case "typeBTextBox":
        SetValue((obj) => {
          const newObj = { ...obj };
          newObj.typeBTextBoxValue = value;
          return newObj;
        });
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    const isSelectedKind = value.kindValue != "" ? true : false;
    const isSelectedTypeA = typeA.includes(value.kindValue)
      ? value.typeADropdownValue != "" && value.typeATextBoxValue != ""
        ? true
        : false
      : true;
    const isSelectedTypeB = typeB.includes(value.kindValue)
      ? value.typeBDropdownValue != "" && value.typeBTextBoxValue != ""
        ? true
        : false
      : true;
    setIsSavable(isSelectedKind && isSelectedTypeA && isSelectedTypeB);
  }, [value]);
  return (
    <>
      <KindDropdown onChangekindValue={onChangekindValue} />
      {typeA.includes(value.kindValue) ? (
        <>
          <br />
          <TypeA onChangeValue={onChangeValue} />
        </>
      ) : (
        <></>
      )}
      {typeB.includes(value.kindValue) ? (
        <>
          <br />
          <TypeB onChangeValue={onChangeValue} />
        </>
      ) : (
        <></>
      )}
      <br />
      <SaveButton isSavable={isSavable} />
    </>
  );
};
