import React from 'react';

const FacebookEmbed = ({ pageUrl }) => {
  if (!pageUrl) return null;

  const encodedPageUrl = encodeURIComponent(pageUrl);

  return (
    <div className="w-full flex justify-center px-2 sm:px-4 py-6">
      <div className="w-full max-w-md sm:max-w-lg bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="relative w-full" style={{ paddingBottom: '120%' }}>
          <iframe
            title="Facebook Page Plugin"
            src={`https://www.facebook.com/plugins/page.php?href=${encodedPageUrl}&tabs=timeline&width=500&height=600&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true`}
            className="absolute top-0 left-0 w-full h-full"
            style={{
              border: 'none',
              overflow: 'hidden',
            }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default FacebookEmbed;
