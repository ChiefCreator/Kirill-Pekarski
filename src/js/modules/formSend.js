import formValidation from "./formValidation";

function formSend() {
    const formResult = document.querySelector(".popup-submit-result");
    const form = document.querySelector(".form");
    const submitButton = document.querySelector(".button-submit");
    let isSuccess = false;

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        let error = formValidation(form);

        if (error === 0) {
            animateButton(submitButton, "before");
            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                if (response.status == 200) {
                    isSuccess = true;
                } else {
                    isSuccess = false;
                }
            })
            .catch(error => {
                console.log(error);
            })
            .then(function() {
                setTimeout(() => {
                    form.reset();
                    animateButton(submitButton, "after", isSuccess);

                    isSuccess ? formResult.querySelector(".popup-submit-result__text").textContent = "Форма отправлена успешно" : formResult.querySelector(".popup-submit-result__text").textContent = "Что-то пошло не так";
                    formResult.classList.add("popup-submit-result_active");
                    setTimeout(() => formResult.classList.remove("popup-submit-result_active"), 2000);
                }, 1000);
            });
        }
    })

    function animateButton(button, state, isSuccess) {
        if (state === "before") {
            button.classList.add("button-submit_onclick")
        } else {
            if (isSuccess) {
                button.classList.remove("button-submit_onclick")
                button.classList.add("button-submit_validate-success")
                setTimeout(function() {
                    button.classList.remove("button-submit_validate-success")
                }, 2000)
            } else {
                button.classList.remove("button-submit_onclick")
                button.classList.add("button-submit_validate-error")
                setTimeout(function() {
                    button.classList.remove("button-submit_validate-error")
                }, 2000)
            }
        }
    }
}

export default formSend;