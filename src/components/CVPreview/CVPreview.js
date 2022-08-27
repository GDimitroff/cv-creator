export default function CVPreview({ cv }) {
  return (
    <section className="cv-preview">
      <h1>CV Preview</h1>
      <h3>{cv.firstName}</h3>
      <h3>{cv.lastName}</h3>
    </section>
  );
}
