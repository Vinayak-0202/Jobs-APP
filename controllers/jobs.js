const getAllJobs = (req, res) => {
  res.send("Get all jobs");
};

const getJob = (req, res) => {
  res.send("Get a Job");
};

const createJob = (req, res) => {
  res.send("Create job");
};
const updateJob = (req, res) => {
  res.send("Update job");
};

const deleteJob = (req, res) => {
  res.send("delete job");
};

module.exports = { getAllJobs, getJob, updateJob, deleteJob, createJob };
