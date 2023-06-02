export const onValidatePassword = (password) => {
  if (!password) {
    return {
      error: true,
      message: 'Field cannot be empty',
    }
  }
  if (password.length < 8) {
    return {
      error: true,
      message: 'Passwords must contain at least 8 digits.',
    }
  }

  return {
    error: false,
  }
}

export const validateRegexEmail = (email) => {
  const emailSplited = email.split(' ')

  if (emailSplited.length > 1 && emailSplited[1]) {
    return null
  }

  return String(email)
    .replace(/ /g, '')
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

export const onValidateEmail = (email) => {
  const response = validateRegexEmail(email)

  if (response) {
    return {
      error: false,
    }
  } else {
    return {
      error: true,
      message: 'Invalid email',
    }
  }
}
