function formValidation(form) {
    const inputs = form.querySelectorAll("input");
    const textarea = form.querySelector("textarea");
    let error = 0;

    for (let input of inputs) {
        if (input.getAttribute("id") === "input-name") {
            const inputError = input.closest(".input-group").querySelector(".input-group__warning");
            if (input.value.trim().length <= 1) {
                error++;
                addInputError(inputError);

                input.addEventListener("input", () => handleInput(input, inputError, "text"));
            } 
            else deleteInputError(inputError);
        }
        if (input.getAttribute("id") === "input-surname") {
            const inputError = input.closest(".input-group").querySelector(".input-group__warning");
            if (input.value.trim().length <= 1) {
                error++;
                addInputError(inputError);

                input.addEventListener("input", () => handleInput(input, inputError, "text"));
            } 
            else deleteInputError(inputError);
        }
        if (input.getAttribute("id") === "input-mail") {
            const inputError = input.closest(".input-group").querySelector(".input-group__warning");
            if (!checkMail(input.value)) {
                error++;
                addInputError(inputError);

                input.addEventListener("input", () => handleInput(input, inputError, "mail"));
            } 
            else deleteInputError(inputError);
        }
    }

    if (textarea.id === "textarea-message") {
        const textareaError = textarea.closest(".textarea-group").querySelector(".textarea-group__warning");
        if (textarea.value.trim().length <= 1) {
            error++;
            addInputError(textareaError);

            textarea.addEventListener("input", () => handleInput(textarea, textareaError, "text"));
        } 
        else deleteInputError(textareaError);
    }

    return error;

    function checkMail(mail) {
        const mailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!mailPattern.test(mail)) return false;
        return true;
    }
    function addInputError(error) {
        error.classList.add("error-active");
    }
    function deleteInputError(error) {
        error.classList.remove("error-active");
    }
    function handleInput(input, inputError, inputType) {
        if (inputType === "text") {
            if (input.value.trim().length > 1) deleteInputError(inputError);
            else addInputError(inputError);
        }
        else if (inputType === "mail") {
            if (checkMail(input.value)) deleteInputError(inputError);
            else addInputError(inputError);
        }
    }
}

export default formValidation;