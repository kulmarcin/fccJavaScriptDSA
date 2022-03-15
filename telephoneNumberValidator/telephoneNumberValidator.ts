function telephoneCheck(str: string) {
  const regex =
    /^\d{3}-\d{3}-\d{4}$|^\(\d{3}\)\d{3}-\d{4}$|^\(\d{3}\)\s\d{3}-\d{4}$|^\d{3}\s\d{3}\s\d{4}$|^\d{10}$|^1\s\d{3}\s\d{3}\s\d{4}$|^1\s\d{3}-\d{3}-\d{4}$|^1\s\(\d{3}\)\s\d{3}-\d{4}$|^1\(\d{3}\)\d{3}-\d{4}$/;
  return regex.test(str);
}
