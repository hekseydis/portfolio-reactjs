export default function ProjText({ isVisible, text }) {
  return (
    <div className='proj-contain-text'>
    <div className={`proj-text ${isVisible ? 'proj-text-visible' : ''}`}>
      {text}
    </div>
    </div>
  );
}
