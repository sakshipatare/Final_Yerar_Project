import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Briefcase, 
  Users, 
  Calendar, 
  FileText, 
  MessageSquare,
  Building2,
  User
} from 'lucide-react';
import JobListings from './JobListings';
import InterviewSchedule from './InterviewSchedule';
import Profile from './Profile';

export default function Dashboard() {
  const { userType } = useParams();
  const [activeSection, setActiveSection] = useState('jobs');

  const renderCandidateNavigation = () => (
    <div className="bg-white shadow-sm mb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 -mb-px">
          <button
            onClick={() => setActiveSection('jobs')}
            className={`${
              activeSection === 'jobs'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
          >
            <Briefcase className="h-5 w-5 mr-2" />
            Job Applications
          </button>
          <button
            onClick={() => setActiveSection('interviews')}
            className={`${
              activeSection === 'interviews'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
          >
            <Calendar className="h-5 w-5 mr-2" />
            Upcoming Interviews
          </button>
          <button
            onClick={() => setActiveSection('profile')}
            className={`${
              activeSection === 'profile'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
          >
            <User className="h-5 w-5 mr-2" />
            Profile
          </button>
        </div>
      </div>
    </div>
  );

  const renderCandidateContent = () => {
    switch (activeSection) {
      case 'jobs':
        return <JobListings />;
      case 'interviews':
        return <InterviewSchedule />;
      case 'profile':
        return <Profile />;
      default:
        return null;
    }
  };

  const renderCandidateDashboard = () => (
    <>
      {renderCandidateNavigation()}
      <div className="grid grid-cols-1 gap-6">
        {renderCandidateContent()}
      </div>
    </>
  );

  const renderInterviewerDashboard = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <DashboardCard
        icon={<Calendar className="h-6 w-6" />}
        title="Interview Schedule"
        description="View your upcoming interview sessions"
      />
      <DashboardCard
        icon={<MessageSquare className="h-6 w-6" />}
        title="Feedback Forms"
        description="Complete candidate evaluation forms"
      />
      <DashboardCard
        icon={<FileText className="h-6 w-6" />}
        title="Resources"
        description="Access interview guidelines and resources"
      />
    </div>
  );

  const renderCompanyDashboard = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <DashboardCard
        icon={<Building2 className="h-6 w-6" />}
        title="Job Postings"
        description="Manage your active job listings"
      />
      <DashboardCard
        icon={<Users className="h-6 w-6" />}
        title="Candidates"
        description="Review applications and schedule interviews"
      />
      <DashboardCard
        icon={<FileText className="h-6 w-6" />}
        title="Analytics"
        description="View hiring metrics and insights"
      />
    </div>
  );

  const getDashboardContent = () => {
    switch (userType) {
      case 'candidate':
        return renderCandidateDashboard();
      case 'interviewer':
        return renderInterviewerDashboard();
      case 'company':
        return renderCompanyDashboard();
      default:
        return null;
    }
  };

  const getTitle = () => {
    switch (userType) {
      case 'candidate':
        return activeSection === 'jobs' 
          ? 'Job Opportunities'
          : activeSection === 'interviews'
          ? 'Upcoming Interviews'
          : 'Profile';
      case 'interviewer':
        return 'Interviewer Dashboard';
      case 'company':
        return 'Company Dashboard';
      default:
        return 'Dashboard';
    }
  };

  return (
    <div className="flex-1 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">{getTitle()}</h1>
        {getDashboardContent()}
      </div>
    </div>
  );
}

function DashboardCard({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
}) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              {icon}
            </div>
          </div>
          <div className="ml-5">
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-5 py-3">
        <div className="text-sm">
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
            View details →
          </a>
        </div>
      </div>
    </div>
  );
}