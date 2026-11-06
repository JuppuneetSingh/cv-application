import {useState} from "react";

function Education({onSubmit,initialData})
{
    const[schoolName,setSchoolName]=useState(initialData.schoolName ?? "");
    const[titleOfStudy,setTitleOfStudy]=useState(initialData.titleOfStudy ?? "");
    const[dateOfStudy,setDateOfStudy]=useState(initialData.dateOfStudy ?? "");
    const[submitted,setSubmitted]=useState(false);

    return(
        <section>
            <h2>Education</h2>
            {submitted ? (
            <div>
                <p>School Name:{schoolName}</p>
                <p>Title of Study:{titleOfStudy}</p>
                <p>Date of Study:{dateOfStudy}</p>
                <button onClick={()=>setSubmitted(false)}>Edit</button>
            </div>
                    ):
                    (
                        <form onSubmit={(event)=>{
                            event.preventDefault();
                            setSubmitted(true);
                            onSubmit({
                                schoolName,
                                titleOfStudy,
                                dateOfStudy
                            });
                        }}>    
                    
            <div>
                <label htmlFor="schoolName">School Name</label>
                <input
                id="schoolName"
                type="text"
                required
                value={schoolName}
                onChange={(event)=>setSchoolName(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="titleOfStudy">Title of Study</label>
                <input
                id="titleOfStudy"
                type="text"
                required
                value={titleOfStudy}
                onChange={(event)=>setTitleOfStudy(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="dateOfStudy">Date of Study</label>
                <input
                id="dateOfStudy"
                type="date"
                required
                value={dateOfStudy}
                onChange={(event)=>setDateOfStudy(event.target.value)}
                />
            </div>
            
                <button type="submit">Submit</button>
                </form>
                    )}
        
        </section>
    )
}



export default Education;
