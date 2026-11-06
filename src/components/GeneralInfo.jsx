import {useState} from "react";

function GeneralInfo({onSubmit,initialData})
{
    const[firstName,setFirstName]= useState(initialData.firstName ??"");
    const[lastName,setLastName]=useState(initialData.lastName ?? "");
    const[email,setEmail]=useState(initialData.email ?? "");
    const[phone,setPhone]=useState(initialData.phone ?? "");
    const[submitted,setSubmitted]=useState(false);

    return(
        <section>
            <h2>General Information</h2>
            {submitted ?(
                <div>
                    <p>First Name: {firstName}</p>
                    <p>Last Name: {lastName}</p>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                    <button onClick={()=>setSubmitted(false)}>Edit</button>
                </div>
                ):(
                    <form
                    onSubmit={(event)=>{
                        event.preventDefault();
                        setSubmitted(true);

                        onSubmit({
                            firstName,
                            lastName,
                            email,
                            phone
                        });
                    }}
            >
            
           <div>
            <label htmlFor="firstName">First Name</label>
            <input
            id="firstName"
            type="text"
            required
            value={firstName}
            onChange={(event)=>setFirstName(event.target.value)}
            />
           </div>

           <div>
            <label htmlFor="lastName">Last Name</label>
            <input
            id="lastName"
            type="text"
            required
            value={lastName}
            onChange={(event)=>setLastName(event.target.value)}
            />
           </div>

           <div>
            <label htmlFor="email">Email</label>
            <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(event)=>setEmail(event.target.value)}
            />
           </div>
           <div>
            <label htmlFor="phone">Phone</label>
            <input 
            id="phone"
            type="tel"
            required
            value={phone}
            onChange={(event)=>setPhone(event.target.value)}
            />
           </div>

           <button type="submit">
            Submit
           </button>
           </form>
                )}
        </section>

    );
}

export default GeneralInfo;
