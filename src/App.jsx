
import { useState } from "react";
import "./App.css";

import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import PracticalExperience from "./components/PracticalExperience";
import CVPreview from "./components/CVPreview";

function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [education, setEducation] = useState({});
  const [experience, setExperience] = useState({});

  const [generalSubmitted, setGeneralSubmitted] = useState(false);
  const [educationSubmitted, setEducationSubmitted] = useState(false);
  const [experienceSubmitted, setExperienceSubmitted] = useState(false);

  const [showCV, setShowCV] = useState(false);

  return (
    <main className="app">
      {!showCV ? (
        <>
          <h1>CV Application</h1>

          <GeneralInfo
            onSubmit={(data) => {
              setGeneralInfo(data);
              setGeneralSubmitted(true);
            }}
            initialData={generalInfo}
          />

          <Education
            onSubmit={(data) => {
              setEducation(data);
              setEducationSubmitted(true);
            }}
            initialData={education}
          />

          <PracticalExperience
            onSubmit={(data) => {
              setExperience(data);
              setExperienceSubmitted(true);
            }}
            initialData={experience}
          />

          {generalSubmitted &&
            educationSubmitted &&
            experienceSubmitted && (
              <button onClick={() => setShowCV(true)}>
                Generate CV
              </button>
            )}
        </>
      ) : (
        <CVPreview
          generalInfo={generalInfo}
          education={education}
          experience={experience}
          onBack={() => {
         setShowCV(false);
         setGeneralSubmitted(false);
         setEducationSubmitted(false);
          setExperienceSubmitted(false);
}}
        />
      )}
    </main>
  );
}

export default App;
