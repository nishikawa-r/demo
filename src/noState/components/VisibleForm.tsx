import { form } from "../types/form";

export const VisibleForm = () => {
  const root = document.getElementById("root_noState");
  const typeA = ["入力内容A", "入力内容A+B"];
  const typeB = ["入力内容B", "入力内容A+B"];
  const onChangekindValue = (event: Event) => {
    if (!(event.target instanceof HTMLSelectElement)) {
      return;
    }
    const selectValue = event.target.value ?? "";
    const saveButton = document.getElementById("visibleSaveButton");
    const typeAElements = document.getElementById("typeA");
    const typeBElements = document.getElementById("typeB");
    if (typeA.includes(selectValue)) {
      typeAElements!.style.display = "block";
      if (typeA[1] != selectValue) {
        typeBElements!.style.display = "none";
      }
    }
    if (typeB.includes(selectValue)) {
      typeBElements!.style.display = "block";
      if (typeA[1] != selectValue) {
        typeAElements!.style.display = "none";
      }
    }
    if (selectValue == "") {
      saveButton?.setAttribute("disabled", "true");
      typeAElements!.style.display = "none";
      typeBElements!.style.display = "none";
    }
  };
  const onChangeValue = (type: form.argType, value: string) => {
    switch (type) {
      case "typeADropdown":

        break;
      case "typeBDropdown":

        break;
      case "typeATextBox":

        break;
      case "typeBTextBox":
 
        break;
      default:
        break;
    }
  };

  const kindList = [
    { label: "-----", value: "" },
    { label: "入力内容A", value: "入力内容A" },
    { label: "入力内容B", value: "入力内容B" },
    { label: "入力内容A+B", value: "入力内容A+B" },
  ];
  const createSaveButton = () => {
    const saveButton = document.createElement("button");
    saveButton.id = "visibleSaveButton";
    saveButton.innerText = "保存";
    saveButton.disabled = true;
    root?.append(saveButton);
  };
  const createKindDropdown = () => {
    const KindDropdown = document.createElement("select") as HTMLSelectElement;
    KindDropdown.id = "KindDropdown";
    KindDropdown.addEventListener("change", (event) => {
      onChangekindValue(event);
    });
    for (const kind of kindList) {
      const option = document.createElement("option");
      option.value = kind.value;
      option.label = kind.label;
      KindDropdown.append(option);
    }
    root?.append(KindDropdown);
    const br = document.createElement("br");
    root?.append(br);
  };
  const typeARender = () => {
    const wrapper = document.createElement("div");
    wrapper.id = "typeA";
    const typeAList = [
      { label: "-----", value: "" },
      { label: "A", value: "A" },
    ];
    const typeADropdown = document.createElement("select");
    typeADropdown.addEventListener("change", (event) => {
      onChangekindValue(event);
    });
    for (const typeA of typeAList) {
      const option = document.createElement("option");
      option.value = typeA.value;
      option.label = typeA.label;
      typeADropdown.append(option);
    }
    wrapper?.append(typeADropdown);
    const br = document.createElement("br");
    wrapper?.append(br);
    const typeATextBox = document.createElement("input");
    wrapper?.append(typeATextBox);
    const br2 = document.createElement("br");
    wrapper?.append(br2);
    root?.append(wrapper);
    wrapper!.style.display = "none";
  };
  const typeBRender = () => {
    const wrapper = document.createElement("div");
    wrapper.id = "typeB";
    const typeBList = [
      { label: "-----", value: "" },
      { label: "B", value: "B" },
    ];
    const typeBDropdown = document.createElement("select");
    typeBDropdown.addEventListener("change", (event) => {
      onChangeValue(event);
    });
    for (const typeB of typeBList) {
      const option = document.createElement("option");
      option.value = typeB.value;
      option.label = typeB.label;
      typeBDropdown.append(option);
    }
    wrapper?.append(typeBDropdown);
    const br = document.createElement("br");
    wrapper?.append(br);
    const typeBTextBox = document.createElement("input");
    wrapper?.append(typeBTextBox);
    const br2 = document.createElement("br");
    wrapper?.append(br2);
    root?.append(wrapper);
    wrapper!.style.display = "none";
  };
  createKindDropdown();
  typeARender();
  typeBRender();
  createSaveButton();
};
