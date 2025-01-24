import "./JournalItem.css"

function JournalItem({ title, text, date }) {
  const formatedDate = new Intl.DateTimeFormat("ru-RU").format(date);
  return (
    <>
      <h2 className="journal-item_header">{title}</h2>
      <h2 className="journal-item_body">
        <div className="journal-item_date">{formatedDate}</div>
        <div className="journal-item_text">{text}</div>
      </h2>
    </>
  );
}

export default JournalItem;
