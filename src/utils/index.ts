const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.?)+[a-zA-Z]{2,}))$/;

export const validators = {
  email: (target: string) => EMAIL_REGEX.exec(target),
};

export const validatePatterns = {
  EMAIL_REGEX,
};
