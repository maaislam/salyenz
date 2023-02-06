import { validateEmail } from '../helpers/utils';

const formSubmitHandler = (event) => {
  event.preventDefault();

  const emailElem = event.target.querySelector('#email');
  console.log('email', emailElem.value);
  const isEmailValid = validateEmail(emailElem.value);
  //console.log('🚀 ~ file: formSumbithandler.js:9 ~ formSubmitHandler ~ isEmailValid', isEmailValid);
  if (!isEmailValid) {
    emailElem.setCustomValidity('We are expecting a valid email address!');
    emailElem.reportValidity();
    return;
  }
  emailElem.setCustomValidity('');
  const myForm = event.target;
  console.log(myForm);
  const formData = new FormData(myForm);

  console.log('formData', formData);

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log('Form successfully submitted'))
    .catch((error) => console.log(error));
};

export default formSubmitHandler;
