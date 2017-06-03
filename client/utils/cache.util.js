import cookies from 'browser-cookies';

export function setCache(name, data, expires = 1) {
  cookies.set(name, 'true', { expires });
  const cookieIsSet = JSON.parse(cookies.get(name));
  if(cookieIsSet) {
    localStorage.setItem(name, JSON.stringify(data));
  }
}

export function getCache(name) {
  const cookie = cookies.get(name);
  if(cookie) {
    return JSON.parse(localStorage.getItem(name));
  }
  else {
    return false;
  }
}

export function isCacheValid(name) {
  return !!cookies.get(name);
}