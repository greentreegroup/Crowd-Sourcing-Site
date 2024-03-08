import React from 'react';
import './EducationPage.css'; // Import the updated CSS file

const EducationPage = () => {
  // Sample data for videos and articles
  const content = [
    { 
      type: 'video',
      id: 1,
      title: 'Video 1',
      url: 'https://www.youtube.com/embed/eWCz8JC1dHA?si=FM4WzItPb3o7Kz59',
    },
    { 
      type: 'video',
      id: 2,
      title: 'Video 2',
      url: 'https://www.youtube.com/embed/t9Nf4SDtGGk?si=MlDG0kTJ6b4wehxh',
    },
    { 
      type: 'video',
      id: 3,
      title: 'Video 3',
      url: 'https://www.youtube.com/embed/Ko56ryNw30M?si=N2__3HZ6Js80Y43o',
    },
    { 
      type: 'article',
      id: 4,
      title: 'Company Related Articles',
      url: 'https://www.springer.capital/',
      image: 'nexter.jpg',
    },
    { 
      type: 'article',
      id: 5,
      title: 'Real Estate Crowdfunding Related Articles',
      url: 'https://www.investopedia.com/articles/investing/072514/real-estate-and-crowdfunding-new-path-investors.asp',
      image: 'RSCF.jpg',
    },
    { 
      type: 'article',
      id: 6,
      title: 'Real Estate Laws Article',
      url: 'https://iclg.com/practice-areas/real-estate-laws-and-regulations/usa',
      image: 'REL.jpg',
    },
  ];

  return (
    <div>
      <h2 className='head-line'>Learn More About Us</h2>
      <div className="content-container">
        {content.map(item => (
          <div key={item.id} className={item.type === 'video' ? 'video-card' : 'article-card'}>
            {item.type === 'video' ? (
              <div className="video-wrapper">
                <iframe
                  title={item.title}
                  width="100%"
                  height="100%"
                  src={item.url}
                  allowFullScreen
                />
              </div>
            ) : (
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <div className="article-thumbnail">
                  <img src={`/img/${item.image}`} alt={item.title} />
                </div>
                <h3 className="article-title">{item.title}</h3>
                <div className="article-preview">{item.preview}</div>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationPage;
