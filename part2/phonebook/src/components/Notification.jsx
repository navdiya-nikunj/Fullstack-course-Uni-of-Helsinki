import "./notification.css";

const Notification = ({ msg, type }) => {
  if (!msg) {
    return null;
  }
  console.log(type);
  return (
    <div className="notificationContainer" id={type}>
      <p className="notificationMessage">{msg}</p>
    </div>
  );
};
export default Notification;
