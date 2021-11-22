const calculate = () => {
  let calcType = document.querySelector("#calc-type");
  let calcMaterial = document.querySelector("#calc-type-material");
  let calcInput = document.querySelector("#calc-input");
  let calcSection = document.querySelector("#calc");

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;

    const calcMaterialValue =
      +calcMaterial.options[calcMaterial.selectedIndex].value;

    let totalValue = 0;
    let calcInputValue = 1;

    if (calcInput.value > 1) {
      calcInputValue += +calcInput.value;
    }

    if (calcType.value && calcMaterial.value) {
      totalValue = calcTypeValue * calcMaterialValue * calcInputValue;
    } else {
      totalValue = 0;
    }
    return totalValue;
  };
  if (calcSection) {
    calcSection.addEventListener("input", (e) => {
      let res = countCalc();
      if (res > 0) {
        let e = document.querySelector("#calc-total");
        e.value = res;
      }
    });
  }
};

export default calculate;
