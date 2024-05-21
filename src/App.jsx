import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import JobPage, {jobLoader} from './pages/JobPage';
import NotFoundPage from './pages/NotFoundPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';



const App = () => {
  
  const addJob = async (newJob) => {
    // Add new Job
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });
    return;
  };

  // Update Job
  const updatedJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    });
    return;
  }

  // Delete Job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  };
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>} />
        <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updatedJob}/>} 
        loader={jobLoader} />
        <Route path='/jobs/:id' element={<JobPage deleteJob={ deleteJob }/>} 
        loader={jobLoader} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>  
    )
  );

  return <RouterProvider router={router} />;
};

export default App