export function getErrorMessage(errorMessage: any): string {
  if (errorMessage) {
    if (errorMessage.required == true) {
      return 'is required';
    } else if (errorMessage.email == true) {
      return 'is not a valid email';
    } else {
      return '';
    }
  } else {
    return '';
  }
}
