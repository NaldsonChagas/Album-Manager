import M from "materialize-css";

const Alert = {
  showAlert: (color, message) => M.toast({ html: message, displayLength: 3000, classes: color }),
}

export default Alert;