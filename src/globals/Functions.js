export function validateEmail (email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test (String (email).toLowerCase ());
}
export function validatePassword (password) {
  return this.value.match (
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/
  );
}

export function validatePhoneNumber (phoneNumber) {
  if (isNaN (phoneNumber)) return false;
  if (phoneNumber.startsWith ('0') && phoneNumber.length === 10) return true;
  return false;
}
export function toDate(dateStr) {
  var parts = dateStr.split("-")
  return new Date(parts[2], parts[1] - 1, parts[0])
}