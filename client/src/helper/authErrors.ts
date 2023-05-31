export const getAuthError = (error: string) => {
  switch (error) {
    case "auth/user-not-found":
      return "No user found with this email.";
    case "auth/user-disabled":
      return "User disabled.";
    case "auth/invalid-email":
      return " Wrong email/password combination.";
    case "auth/wrong-password":
      return "Wrong email/password combination.";
    case "auth/email-already-in-use":
      return "Email is alrady in use.";
    case "auth/operation-not-allowed":
      return "Operation not allowed.";
    case "auth/weak-password":
      return "The password is too weak.";
    case "auth/credential-already-in-use":
      return "This credential is already associated with a different user account.";
    case "auth/user-token-expired":
      return "The user's credential is no longer valid. The user must sign in again.";
    case "auth/popup-blocked":
      return "Unable to establish a connection with the popup. It may have been blocked by the browser.";
    case "auth/popup-closed-by-user":
      return "The popup has been closed by the user before finalizing the operation.";
    case "auth/provider-already-linked":
      return "User can only be linked to one identity for the given provider.";
    default:
      return "An unexpected error occurred.";
  }
};
