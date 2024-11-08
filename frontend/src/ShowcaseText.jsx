import React from 'react';
import logo from '../logo2.svg';

const ShowcaseText = () => {
  return (
    <div>
      <div
        className="shadow-lg overflow-hidden bg-white text-black rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <div className="space-y-6 p-8">
            <p className="leading-relaxed text-gray-700">
              <strong>Hello, World!</strong>
              {`
              PunPun here a new dev on the Internet Computer Protocol (ICP), thanks for hosting!
              `}
            </p>
            
            <img src={logo} alt="Onchain logo" className="logo h-24 w-64 mt-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseText;
