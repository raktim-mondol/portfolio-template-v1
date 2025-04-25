import React, { useState, useEffect } from 'react';
import { Search, Download, ExternalLink, Filter } from 'lucide-react';
import { publications } from '../../data/profileData';
import { Publication } from '../../types';

const Publications: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPublications, setFilteredPublications] = useState<Publication[]>(publications);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest' | 'citations'>('newest');
  
  // Get all unique tags
  const allTags = Array.from(new Set(publications.flatMap(pub => pub.tags)));
  
  // Handle search and filtering
  useEffect(() => {
    let result = publications;
    
    // Apply search term filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        pub => 
          pub.title.toLowerCase().includes(term) || 
          pub.abstract.toLowerCase().includes(term) ||
          pub.authors.some(author => author.toLowerCase().includes(term)) ||
          pub.journal.toLowerCase().includes(term)
      );
    }
    
    // Apply tag filter
    if (activeTag) {
      result = result.filter(pub => pub.tags.includes(activeTag));
    }
    
    // Apply sorting
    if (sortOrder === 'newest') {
      result = [...result].sort((a, b) => b.year - a.year);
    } else if (sortOrder === 'oldest') {
      result = [...result].sort((a, b) => a.year - b.year);
    } else if (sortOrder === 'citations') {
      result = [...result].sort((a, b) => b.citations - a.citations);
    }
    
    setFilteredPublications(result);
  }, [searchTerm, activeTag, sortOrder]);

  return (
    <section id="publications" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Publications & Citations</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My complete list of academic publications with citations and impact metrics.
          </p>
        </div>
        
        {/* Search and Filter Controls */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search publications by title, author, or keywords..."
                className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap md:flex-nowrap gap-2">
              <div className="relative w-full md:w-48">
                <select
                  className="block w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none transition-colors"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value as 'newest' | 'oldest' | 'citations')}
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="citations">Most Cited</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <Filter size={18} className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <button
              className={`px-3 py-1 rounded-full text-sm ${
                activeTag === null 
                  ? 'bg-blue-900 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition-colors`}
              onClick={() => setActiveTag(null)}
            >
              All Topics
            </button>
            
            {allTags.map(tag => (
              <button
                key={tag}
                className={`px-3 py-1 rounded-full text-sm ${
                  activeTag === tag 
                    ? 'bg-blue-900 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } transition-colors`}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        
        {/* Publications List */}
        <div className="divide-y">
          {filteredPublications.length > 0 ? (
            filteredPublications.map((publication) => (
              <div key={publication.id} className="py-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Publication Year */}
                  <div className="md:w-24 flex-shrink-0">
                    <div className="bg-white shadow-sm rounded-lg p-3 text-center">
                      <span className="block text-2xl font-bold text-blue-900">{publication.year}</span>
                      <span className="text-sm text-gray-500">{publication.citations} citations</span>
                    </div>
                  </div>
                  
                  {/* Publication Details */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{publication.title}</h3>
                    <p className="text-gray-600 mb-3">{publication.authors.join(', ')}</p>
                    <p className="text-sm text-gray-500 mb-3">
                      <span className="font-medium">{publication.journal}</span>
                      {publication.doi && (
                        <span> • DOI: {publication.doi}</span>
                      )}
                    </p>
                    
                    <div className="mb-4">
                      <p className="text-gray-700">{publication.abstract}</p>
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
                      {publication.pdfUrl && (
                        <a 
                          href={publication.pdfUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 hover:text-blue-800"
                        >
                          <Download size={16} className="mr-1" />
                          PDF
                        </a>
                      )}
                      
                      {publication.doi && (
                        <a 
                          href={`https://doi.org/${publication.doi}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 hover:text-blue-800"
                        >
                          <ExternalLink size={16} className="mr-1" />
                          View Online
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="py-12 text-center">
              <p className="text-lg text-gray-600">No publications found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Publications;