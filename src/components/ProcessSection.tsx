import React from 'react';
import ProcessCard from './ProcessCard';

const ProcessSection = () => {
  const processSteps = [
    {
      title: 'Connect',
      description: 'Start with a free 30-minute discovery call. Pick the perfect plan for your needs, and we\'ll dive into bringing your brand vision to life.',
      icon: 'https://placehold.co/80x80'
    },
    {
      title: 'Submit',
      description: 'Share your project brief via our dedicated Slack channel or Notion workspace. We\'ll hit the ground running while you focus on growing your business.',
      icon: 'https://placehold.co/80x80'
    },
    {
      title: 'Refine',
      description: 'Receive your designs in 1–3 days. We\'ll tweak and revise as many times as needed until your brand bounces with 100% satisfaction.',
      icon: 'https://placehold.co/80x80'
    },
    {
      title: 'Shine',
      description: 'Get stunning results, stand out in your market, and enjoy the confidence of having BrandBounce as your creative partner on demand.',
      icon: 'https://placehold.co/80x80'
    }
  ];

  return (
    <div style={{
      width: '100%',
      height: 1000,
      padding: '50px 80px',
      background: 'white',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
    }}>
      <div style={{
        width: '100%',
        maxWidth: 1280,
        height: 500,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div style={{
          padding: '17px 36px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
        }}>
          <div style={{
            textAlign: 'center',
            color: '#11406E',
            fontSize: 48,
            fontFamily: 'Bricolage Grotesque',
            fontWeight: '500',
            wordWrap: 'break-word',
          }}>
            Getting Started with BrandBounce is a Breeze
          </div>
          <div style={{
            alignSelf: 'stretch',
            textAlign: 'center',
            color: '#4B5563',
            fontSize: 24,
            fontFamily: 'Poppins',
            fontWeight: '500',
            wordWrap: 'break-word',
          }}>
            Our process is designed for startups and small teams who need bold, professional branding without the hassle—fast, flexible, and fun.
          </div>
        </div>

        <div style={{
          alignSelf: 'stretch',
          height: 297,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          {processSteps.map((step, index) => (
            <ProcessCard
              key={index}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;