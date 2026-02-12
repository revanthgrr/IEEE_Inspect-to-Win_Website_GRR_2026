export default function CluePanel({ type,hints }) {

  const primaryHint =
    typeof hints === "string" ? hints : hints?.primary;

  if (type === "blinking") {
    return (
      <div className="clue blinking">
        A B C D E P A U S E J S F G H
      </div>
    );
  }

  if (type === "image-alt") {
    return <img src="/broken.png" alt="ALT_TEXT" />;
  }
  
  return (
    <div className="clue">
    <h2>🔍 Hint Panel</h2>
  
    <p>{primaryHint}</p>
    {/* <p><b>Misleading Hint:</b> {hints?.misleading}</p> */}
  
    <div className="ghost-hint">
      {type}
    </div>
  </div>
  );
}
