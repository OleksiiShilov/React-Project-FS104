const Messages = ({ author = "Anonymous", message = "default" }) => {
  return (
    <div>
      <p>Author: {author}</p>
      <p>{message}</p>
    </div>
  );
};

export default Messages;
