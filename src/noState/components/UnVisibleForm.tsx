export const UnVisibleForm = () => {
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
    const br = document.createElement("br");

    root?.append(br);
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
  createKindDropdown();
  createSaveButton();
};
