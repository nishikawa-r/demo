export const VisibleForm = () => {
  const root = document.getElementById("root_noState");

  const onChangekindValue = (event: Event) => {
    if (!(event.target instanceof HTMLSelectElement)) {
      return;
    }
    const selectedValue = event.target.value ?? "";
    const saveButton = document.getElementById("saveButton");
    if (selectedValue != "") {
      saveButton?.removeAttribute("disabled");
    } else {
      saveButton?.setAttribute("disabled", "true");
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
    saveButton.id = "saveButton";
    saveButton.innerText = "保存";
    saveButton.disabled = true;
    root?.append(saveButton);
  };
  const createKindDropdown = () => {
    const KindDropdown = document.createElement("select") as HTMLSelectElement;
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
  const typeA = () => {
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
    root?.append(typeADropdown);
    const br = document.createElement("br");

    root?.append(br);
    const typeATextBox = document.createElement("input");
    root?.append(typeATextBox);
    const br2 = document.createElement("br");

    root?.append(br2);
  };
  createKindDropdown();
  typeA();
  createSaveButton();
};
