import General from './General';

export default function CVForm(props) {
  return (
    <section className="cv-form">
      <General handleOnChange={props.handleOnChange} formData={props.formData} />
    </section>
  );
}
