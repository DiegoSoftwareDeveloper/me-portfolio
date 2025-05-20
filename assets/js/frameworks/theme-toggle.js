const storageKey = 'light'

const onClick = () => {
  // flip current value
  theme.value = theme.value === 'light'
    ? 'dark'
    : 'light'

  setPreference()
}

const getColorPreference = () => {
  if (localStorage.getItem(storageKey))
    return localStorage.getItem(storageKey)
  else
    return window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'dark'
      : 'light'
}

const setPreference = () => {
  localStorage.setItem(storageKey, theme.value)
  reflectPreference()
}

const reflectPreference = () => {
  document.firstElementChild
    .setAttribute('data-theme', theme.value)

  document
    .querySelector('#theme-toggle')
    ?.setAttribute('aria-label', theme.value)

  if(theme.value !== 'light'){
    document.documentElement.style.setProperty('--bg-color', '#FFFFFF');
    document.documentElement.style.setProperty('--text-color', '#1f242d');
    document.documentElement.style.setProperty('--second-bg-color', '#D1D1D1');
    document.documentElement.style.setProperty('--color-icon', '#323946');

    const logoImg = document.querySelector('.logo img');
    if (logoImg) logoImg.src = 'assets/img/logo-Photoroom2.webp';
  }else{
    document.documentElement.style.setProperty('--bg-color', '#1f242d');
    document.documentElement.style.setProperty('--text-color', '#FFFFFF');
    document.documentElement.style.setProperty('--second-bg-color', '#323946');
    document.documentElement.style.setProperty('--color-icon', 'hsl(220, 9%, 94%)');

    const logoImg = document.querySelector('.logo img');
    if (logoImg) logoImg.src = 'assets/img/logo-Photoroom.webp';
  }
}

const theme = {
  value: getColorPreference(),
}

// set early so no page flashes / CSS is made aware
reflectPreference()

window.onload = () => {
  // set on load so screen readers can see latest value on the button
  reflectPreference()

  // now this script can find and listen for clicks on the control
  document
    .querySelector('#theme-toggle')
    .addEventListener('click', onClick)
}