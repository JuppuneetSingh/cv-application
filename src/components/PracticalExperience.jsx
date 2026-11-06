
import { useState } from "react";

function PracticalExperience({onSubmit,initialData}) {
  const [companyName, setCompanyName] = useState(initialData.companyName ?? "");
  const [positionTitle, setPositionTitle] = useState(initialData.positionTitle ?? "");
  const [mainResponsibility, setMainResponsibility] = useState(initialData.mainResponsibility ?? "");
  const [dateFrom, setDateFrom] = useState(initialData.dateFrom ?? "");
  const [dateUntil, setDateUntil] = useState(initialData.dateUntil ?? "");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section>
      <h2>Practical Experience</h2>

      {submitted ? (
        <div>
          <p>Company: {companyName}</p>
          <p>Position: {positionTitle}</p>
          <p>Responsibilities: {mainResponsibility}</p>
          <p>From: {dateFrom}</p>
          <p>Until: {dateUntil}</p>

          <button onClick={() => setSubmitted(false)}>
            Edit
          </button>
        </div>
      ) : (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);

            onSubmit({
              companyName,
              positionTitle,
              mainResponsibility,
              dateFrom,
              dateUntil
            })
          }}
        >
          <div>
            <label htmlFor="companyName">Company Name</label>
            <input
              id="companyName"
              type="text"
              required
              value={companyName}
              onChange={(event) => setCompanyName(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="positionTitle">Position Title</label>
            <input
              id="positionTitle"
              type="text"
              required
              value={positionTitle}
              onChange={(event) => setPositionTitle(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="responsibilities">Main Responsibilities</label>
            <textarea
              id="responsibilities"
              required
              value={mainResponsibility}
              onChange={(event) => setMainResponsibility(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="dateFrom">From</label>
            <input
              id="dateFrom"
              type="date"
              required
              value={dateFrom}
              onChange={(event) => setDateFrom(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="dateUntil">Until</label>
            <input
              id="dateUntil"
              type="date"
              required
              value={dateUntil}
              onChange={(event) => setDateUntil(event.target.value)}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      )}
    </section>
  );
}

export default PracticalExperience;
