import React from 'react';
import { Calendar, MapPin, Download } from 'lucide-react';
import { courses, presentations } from '../../data/profileData';

const Teaching: React.FC = () => {
  return (
    <section id="teaching" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Teaching & Speaking</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sharing knowledge through academic courses, workshops, and conference presentations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Courses Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 border-b border-gray-200 pb-2">Courses</h3>
            <div className="space-y-8">
              {courses.map(course => (
                <div key={course.id} className="bg-gray-50 rounded-lg p-6 transition-all duration-300 hover:shadow-md">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-medium text-gray-900">{course.title}</h4>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {course.year}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-500 mb-3">{course.institution} • {course.semester}</p>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  
                  {course.materials && (
                    <a 
                      href={course.materials}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm"
                    >
                      <Download size={16} className="mr-1" />
                      Course Materials
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Presentations Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 border-b border-gray-200 pb-2">Speaking Engagements</h3>
            <div className="space-y-8">
              {presentations.map(presentation => (
                <div key={presentation.id} className="bg-gray-50 rounded-lg p-6 transition-all duration-300 hover:shadow-md">
                  <h4 className="text-xl font-medium text-gray-900 mb-2">{presentation.title}</h4>
                  
                  <div className="flex flex-wrap gap-4 mb-3">
                    <div className="inline-flex items-center text-sm text-gray-500">
                      <Calendar size={16} className="mr-1 text-gray-400" />
                      {presentation.date}
                    </div>
                    <div className="inline-flex items-center text-sm text-gray-500">
                      <MapPin size={16} className="mr-1 text-gray-400" />
                      {presentation.location}
                    </div>
                  </div>
                  
                  <p className="text-sm font-medium text-gray-700 mb-2">{presentation.event}</p>
                  <p className="text-gray-600 mb-4">{presentation.description}</p>
                  
                  <div className="flex flex-wrap gap-4">
                    {presentation.slidesUrl && (
                      <a 
                        href={presentation.slidesUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm"
                      >
                        <Download size={16} className="mr-1" />
                        Slides
                      </a>
                    )}
                    
                    {presentation.videoUrl && (
                      <a 
                        href={presentation.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm"
                      >
                        <Download size={16} className="mr-1" />
                        Video
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teaching;