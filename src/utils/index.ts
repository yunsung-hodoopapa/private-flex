const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.?)+[a-zA-Z]{2,}))$/;

export const validators = {
  email: (target: string) => EMAIL_REGEX.exec(target),
};

export const validatePatterns = {
  EMAIL_REGEX,
};

// onChage 이벤트에 적용할 디바운스 함수
export const debounce = <F extends (...args: any[]) => any>(
  func: any,
  waitFor: number
) => {
  let timeout: any;

  return (...args: Parameters<F>): Promise<ReturnType<F>> =>
    new Promise(resolve => {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => resolve(func(...args)), waitFor);
    });
};
