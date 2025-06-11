export default function ProjText({ isVisible, text }) {
  return (
    <div className={`proj-proj-text ${isVisible ? "show" : ""}`}>
      {text}
    </div>
  );
}
