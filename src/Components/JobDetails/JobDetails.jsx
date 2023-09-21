import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const jobs = useLoaderData()
    const { id } = useParams()
    const job = jobs.find(job => job.id === parseInt(id))
    const {experiences, educational_requirements, job_responsibility, job_description, salary, job_title, contact_information } = job

    return (
        <div>
            <div>
                <h1 className="font-bold text-4xl text-center my-6">Job Details</h1>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
                <div className=" border md:col-span-3 space-y-4 p-4">
                    <p><span className="font-bold">Job Description: </span>{job_description}</p>
                    <p><span className="font-bold">Job Responsibility: </span> {job_responsibility}</p>
                    <h3 className="font-bold">Educational Requirements:</h3>
                    <p>{educational_requirements}</p>
                    <h3 className="font-bold">Experiences:</h3>
                    <p>{experiences}</p>
                </div>
                <div className="border p-2">
                    <h3 className=" font-bold text-xl py-2 border-b mb-1">Job Details</h3>
                    <h4 className="font-bold">Salary: <span className="font-normal">{salary} (per month)</span></h4>
                    <h4 className="font-bold">Job Title: <span className="font-normal">{job_title}</span></h4>
                    <h3 className=" font-bold text-xl py-2 border-b mb-1">Contact Information</h3>
                    <h4 className="font-bold">Phone: <span className="font-normal">{contact_information.phone}</span></h4>
                    <h4 className="font-bold">Email: <span className="font-normal">{contact_information.email}</span></h4>
                    <h4 className="font-bold">Address: <span className="font-normal">{contact_information.address}</span></h4>
                    <button className="btn btn-primary w-full mt-4">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;