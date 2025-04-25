import React, { useState } from 'react';
import { ArrowRight, Download, ExternalLink } from 'lucide-react';
import { publications } from '../../data/profileData';

const Research: React.FC = () => {
  const [activeYear, setActiveYear] = useState<number | null>(null);
  const [expandedPublication, setExpandedPublication] = useState<string | null>(null);
  
  // Extract unique years from publications
  const years = Array.from(new Set(publications.map(pub => pub.year))).sort((a, b) => b - a);
  
  // Filter publications by active year, or show all if no year is selected
  const filteredPublications = activeYear 
    ? publications.filter(pub => pub.year === activeYear)
    : publications;
  
  // Calculate total citations
  const totalCitations = publications.reduce((sum, pub) => sum + pub.citations, 0);
  
  // Toggle publication details
  const togglePublication = (id: string) => {
    if (expandedPublication === id) {
      setExpandedPublication(null);
    } else {
      setExpandedPublication(id);
    }
  };

  return (
    <section id="research" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Research & Publications</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Exploring the frontiers of computer vision and AI through innovative research and impactful publications.
          </p>
        </div>
        
        {/* Research Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <p className="text-sm text-gray-500 mb-1">Publications</p>
            <p className="text-3xl font-bold text-gray-900">{publications.length}</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <p className="text-sm text-gray-500 mb-1">Citations</p>
            <p className="text-3xl font-bold text-gray-900">{totalCitations}</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <p className="text-sm text-gray-500 mb-1">h-index</p>
            <p className="text-3xl font-bold text-gray-900">14</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <p className="text-sm text-gray-500 mb-1">Research Areas</p>
            <p className="text-3xl font-bold text-gray-900">5</p>
          </div>
        </div>
        
        {/* Year Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button 
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              activeYear === null ? 'bg-blue-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveYear(null)}
          >
            All Years
          </button>
          {years.map(year => (
            <button 
              key={year}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                activeYear === year ? 'bg-blue-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveYear(year)}
            >
              {year}
            </button>
          ))}
        </div>
        
        {/* Publications List */}
        <div className="space-y-8">
          {filteredPublications.map(publication => (
            <div 
              key={publication.id} 
              className={`bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 ${
                expandedPublication === publication.id ? 'shadow-lg' : 'shadow-sm hover:shadow-md'
              }`}
            >
              <div 
                className="p-6 cursor-pointer"
                onClick={() => togglePublication(publication.id)}
              >
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{publication.title}</h3>
                    <p className="text-gray-600 mb-2">{publication.authors.join(', ')}</p>
                    <p className="text-sm text-gray-500">
                      {publication.journal}, {publication.year}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Citations</p>
                      <p className="text-lg font-semibold text-blue-900">{publication.citations}</p>
                    </div>
                    <button
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(publication.pdfUrl, '_blank');
                      }}
                      aria-label="Download PDF"
                    >
                      <Download size={18} className="text-gray-700" />
                    </button>
                  </div>
                </div>
                
                {expandedPublication === publication.id && (
                  <div className="mt-4 animate-fadeIn">
                    <div className="bg-gray-50 p-4 rounded-md mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Abstract</h4>
                      <p className="text-gray-600 text-sm">{publication.abstract}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {publication.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <a 
                        href={publication.pdfUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Download size={16} className="mr-1" />
                        PDF
                      </a>
                      {publication.doi && (
                        <a 
                          href={`https://doi.org/${publication.doi}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={16} className="mr-1" />
                          DOI
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* More Publications Link */}
        <div className="mt-12 text-center">
          <a 
            href="#publications" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            View All Publications
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Research;