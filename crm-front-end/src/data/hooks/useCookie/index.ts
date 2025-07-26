import Cookies, { type CookieSetOptions } from "universal-cookie";

export const useCookie = () => {
  const cookies = new Cookies();

  const getCookie = (key: string) => {
    return cookies.get(key)
  }

  const setCookie = (key: string, value: unknown, options?: CookieSetOptions) => {
    cookies.set(key, value, { ...options, path: options?.path ?? "/" });
  }

  const removeCookie = (key: string) => {
    cookies.remove(key);
  }

  const removeAllCookies = async () => {
    const keysToRemove: string[] = await new Promise((resolve) => {
      const data = Object.keys(cookies.getAll());
      resolve(data);
    });

    await new Promise((resolve) => {
      keysToRemove.forEach((key) => removeCookie(key));
      resolve(true);
    });

    localStorage.clear();
    return true;
  }

  return { getCookie, removeCookie, setCookie, removeAllCookies }
}