const fioPattern = new RegExp(
  /^[аАбБвВгГдДеЕёЁжЖзЗиИйЙкКлЛмМнНоОпПрРсСтТуУфФхХцЦчЧшШщЩъЪыЫьЬэЭюЮяЯ ]+/,
  "gu"
);
const phonePattern = new RegExp(/\+[0-9]{1,16}/);

function validateField(field, pattern) {
  if (!pattern.test(field.value)) {
    field.classList.add("error");
    field.nextElementSibling.removeAttribute("hidden");
  } else {
    field.classList.remove("error");
    field.nextElementSibling.setAttribute("hidden", "hidden");
  }
}
function validateFields(inputs) {
  let isValidForm = false;

  if (!fioPattern.test(inputs.fio.value)) {
    isValidForm = false;
  } else {
    isValidForm = true;
  }
  if (!phonePattern.test(inputs.phone.value)) {
    isValidForm = false;
  } else {
    isValidForm = true;
  }
  return isValidForm;
}
const orderForm = () => {
  document.querySelectorAll("form").forEach((form) => {
    const fields = form.elements;

    fields.fio.addEventListener("blur", (e) => {
      validateField(
        e.target,
        new RegExp(
          /^[аАбБвВгГдДеЕёЁжЖзЗиИйЙкКлЛмМнНоОпПрРсСтТуУфФхХцЦчЧшШщЩъЪыЫьЬэЭюЮяЯ ]+$/,
          "mu"
        )
      );
    });
    fields.phone.addEventListener("blur", (e) => {
      validateField(e.target, new RegExp(/\+([0-9]{1,16})$/, "m"));
    });
  });

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
