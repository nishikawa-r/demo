export declare module form {
  type argType =
    | "kind"
    | "typeADropdown"
    | "typeBDropdown"
    | "typeATextBox"
    | "typeBTextBox";
  type onChangekindValue = (value: kindValueType) => void;
  type onChangeValueType = (type: argType, value: string) => void;
  type kindValueType = "" | "入力内容A" | "入力内容B" | "入力内容A+B";
  type inputObjType = {
    kindValue: kindvalueType;
    typeADropdownValue: string;
    typeATextBoxValue: string;
    typeBDropdownValue: string;
    typeBTextBoxValue: string;
  };
}
