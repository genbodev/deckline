import CONFIG from "../../../config";

// site key
export const { SITE_KEY } = CONFIG;

export const ReCaptcha = require('react-recaptcha');

// specifying your onload callback function
export const callback = () => {
    console.log('Done!!!!');
};

// specifying verify callback function
export const verifyCallback = (response) => {
    console.log(response);
};

// a callback to pass into the reCAPTCHA if the reCAPTCHA response has expired.
export const expiredCallback = () => {
    console.log(`ReCaptcha expired`);
};

/*
// define a variable to store the recaptcha instance
export const reCaptchaInstance;

// handle reset
export const resetRecaptcha = () => {
    reCaptchaInstance.reset();
};*/
