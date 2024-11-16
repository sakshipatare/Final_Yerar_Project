import React, { useState } from 'react';
import { Star, User } from 'lucide-react';

// Mock candidate data
const mockCandidate = {
  id: 1,
  name: 'Alice Johnson',
  position: 'Senior Frontend Developer',
  company: 'TechCorp',
  experience: '5 years',
  skills: ['React', 'TypeScript', 'Node.js'],
  education: 'BS in Computer Science',
  interview: {
    date: '2024-03-20',
    type: 'Technical Interview',
  },
};

export default function FeedbackForm() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle feedback submission
    console.log({ rating, feedback });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        {/* Candidate Profile Section */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{mockCandidate.name}</h2>
              <p className="mt-1 text-sm text-gray-500">{mockCandidate.position}</p>
            </div>
            <div className="flex items-center space-x-2">
              <User className="h-10 w-10 text-gray-400" />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font- <boltAction type="file" filePath="src/components/FeedbackForm.tsx">medium text-gray-500">Professional Details</h3>
              <dl className="mt-2 space-y-1">
                <div className="text-sm text-gray-900">
                  <dt className="inline font-medium">Experience: </dt>
                  <dd className="inline">{mockCandidate.experience}</dd>
                </div>
                <div className="text-sm text-gray-900">
                  <dt className="inline font-medium">Education: </dt>
                  <dd className="inline">{mockCandidate.education}</dd>
                </div>
                <div className="text-sm text-gray-900">
                  <dt className="inline font-medium">Skills: </dt>
                  <dd className="inline">{mockCandidate.skills.join(', ')}</dd>
                </div>
              </dl>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Interview Details</h3>
              <dl className="mt-2 space-y-1">
                <div className="text-sm text-gray-900">
                  <dt className="inline font-medium">Date: </dt>
                  <dd className="inline">{mockCandidate.interview.date}</dd>
                </div>
                <div className="text-sm text-gray-900">
                  <dt className="inline font-medium">Type: </dt>
                  <dd className="inline">{mockCandidate.interview.type}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Feedback Form Section */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Overall Rating
            </label>
            <div className="mt-2 flex items-center space-x-2">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setRating(value)}
                  className={`p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                    rating >= value ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                >
                  <Star className="h-8 w-8" fill={rating >= value ? 'currentColor' : 'none'} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">
              Detailed Feedback
            </label>
            <div className="mt-2">
              <textarea
                id="feedback"
                rows={6}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Please provide detailed feedback about the candidate's performance..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}