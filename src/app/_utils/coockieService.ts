interface CookieOptions {
  path: string;
  domain: string;
  expires: Date;
  maxAge: number;
  secure: boolean;
  samesite: "strict" | "lax";
}

const toKebabCase = (text: string) => text.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, '-').toLowerCase();

const set = (name: string, value: string, options: Partial<CookieOptions> = {}) => {
  options = {
    path: '/',
    ...options
  };
  options.expires = options.expires?.toUTCString() as any;

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let key in options) {
    updatedCookie += "; " + toKebabCase(key);
    let attributeValue = options[key];
    if (attributeValue !== true) {
      updatedCookie += "=" + attributeValue;
    }
  }
  document.cookie = updatedCookie;
}

const get = (name: string) => {
  let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

const del = (name) => {
  set(name, "", {
    maxAge: -1
  })
}

export const cookieService = {
  set,
  get,
  del
}
