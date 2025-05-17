import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';
import RepoCard from '../components/RepoCard';

const Dashboard = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/repo', { withCredentials: true });
        setRepos(response.data);
      } catch (error) {
        console.error('Error fetching repositories', error);
      }
    };
    fetchRepos();
  }, []);

  return (
    <div className="dashboard container-fluid bg-light text-dark min-vh-100">
      <header className="dashboard-header bg-dark text-white p-3 d-flex align-items-center justify-content-between border-bottom border-secondary">
        <div className="d-flex align-items-center">
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub Logo"
            width="40"
            className="me-3"
          />
          <h2 className="m-0">GitHub Dashboard</h2>
        </div>
      </header>

      <div className="container mt-5">
        <h1 className="mb-4 fw-bold">Your Repositories</h1>
        <div className="row">
          {repos.map((repo) => (
  <div className="col-md-4" key={repo.id}>
    <RepoCard repo={repo} />
  </div>
))}

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
