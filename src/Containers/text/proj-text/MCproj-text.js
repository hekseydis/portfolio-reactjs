export default function MCProjText({ isVisible, text }) {
  return (
    <div className={`mc-proj-text ${isVisible ? "show" : ""}`}>
      {text}
    </div>
  );
}
