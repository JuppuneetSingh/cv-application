
function CVPreview({ generalInfo, education, experience , onBack}) {
  return (
    <div className="cv-preview">
      <header>
        <h1>
          {generalInfo.firstName} {generalInfo.lastName}
        </h1>
        <p>{generalInfo.email} | {generalInfo.phone}</p>
      </header>

      <section>
        <h2>Education</h2>
        <h3>{education.schoolName}</h3>
        <p>{education.titleOfStudy}</p>
        <p>{education.dateOfStudy}</p>
      </section>

      <section>
        <h2>Work Experience</h2>
        <h3>{experience.positionTitle}</h3>
        <p>{experience.companyName}</p>
        <p>{experience.mainResponsibility}</p>
        <p>{experience.dateFrom} - {experience.dateUntil}</p>
      </section>

           <button onClick={onBack}>Back to Edit</button>
    </div>
  );
}

export default CVPreview;
