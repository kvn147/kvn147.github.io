export default function ResumeButton() {
  const pdfUrl = `${import.meta.env.BASE_URL}resumes/robotics-resume.pdf`;

  const handleOpenResume = () => {
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  };

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--lx", `${x}%`);
    e.currentTarget.style.setProperty("--ly", `${y}%`);
  };

  const handlePointerLeave = (e) => {
    e.currentTarget.style.setProperty("--lx", "50%");
    e.currentTarget.style.setProperty("--ly", "50%");
  };

  return (
    <button
      type="button"
      onClick={handleOpenResume}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="liquid-glass-button"
    >
      Resume
    </button>
  );
}