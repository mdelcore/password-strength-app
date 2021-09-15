const strengther = document.querySelector(".strengther");
const passwordInput = document.querySelector("input[type='text']");
const passwordCheck = document.querySelector(".password-check");

passwordInput.addEventListener("input", updateStrengther);

function updateStrengther() {
  const assessments = calculatePasswordStrength(passwordInput.value)

  let strength = 100;
  passwordInput.innerHTML = "";

  assessments.forEach(assessment => {
    if(assessment == null) return;

    strength -= assessment.strengthLost
    const pwdCheckEl = document.createElement("p")
    pwdCheckEl.innerHTML = assessment.pwdCheck;
    passwordInput.appendChild(pwdCheckEl)
  });
  strengther.style.setProperty("--strength-amount", strength)
}
