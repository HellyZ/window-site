function validateFields(inputs) {
  let isValid = false;
  const pattern = new RegExp(
    /^[аАбБвВгГдДеЕёЁжЖзЗиИйЙкКлЛмМнНоОпПрРсСтТуУфФхХцЦчЧшШщЩъЪыЫьЬэЭюЮяЯ ]+$/,
    "gu"
  );
  if (!pattern.test(inputs.fio.value)) {
    inputs.fio.classList.add("error");
    inputs.fio.nextElementSibling.removeAttribute("hidden");
    isValid = false;
  } else {
    inputs.fio.classList.remove("error");
    inputs.fio.nextElementSibling.setAttribute("hidden", "hidden");
    isValid = true;
  }

  if (!new RegExp(/\+[0-9]{1,16}$/).test(inputs.phone.value)) {
    inputs.phone.classList.add("error");
    inputs.phone.nextElementSibling.removeAttribute("hidden");
    isValid = false;
  } else {
    inputs.phone.classList.remove("error");
    inputs.phone.nextElementSibling.setAttribute("hidden", "hidden");
    isValid = true;
  }
  return isValid;
}
const orderForm = () => {
  let forms = document.querySelectorAll(".order form");
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.target.checkValidity();
      e.preventDefault();
      let inputs = e.target.elements;
      if (validateFields(inputs)) {
        alert(`perform form submitting`);
      } else {
        console.error("Validation failed");
        return;
      }
    });
  });
};

export default orderForm;
