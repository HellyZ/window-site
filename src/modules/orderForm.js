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
  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  let forms = document.querySelectorAll(".order form");
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.target.checkValidity();
      e.preventDefault();
      let inputs = e.target.elements;
      if (validateFields(inputs)) {
        const formBody = {
          fio: inputs.fio.value,
          phone: inputs.phone.value,
          page: inputs.page.value,
        };
        let total = document.querySelector("#calc-total");
        if (total && total.value) {
          formBody["total"] = total.value;
        }
        sendData(formBody)
          .then((data) => {
            inputs.fio.value = "";
            inputs.phone.value = "";
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        console.error("Validation failed");
        return;
      }
    });
  });
};

export default orderForm;
