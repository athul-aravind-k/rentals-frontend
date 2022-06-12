export function getErrorMessage(errorMessage: any): string {
  if (errorMessage) {
    if (errorMessage.required == true) {
      return 'This is a Required Field';
    } else if (errorMessage.email == true) {
      return 'This is Not a Valid Email';
    } else {
      return '';
    }
  } else {
    return '';
  }
}
