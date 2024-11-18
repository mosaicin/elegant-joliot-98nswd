import React, { useState } from 'react';

const App = () => {
  const [is3D, setIs3D] = useState(false);

  const handleMouseOver = () => {
    setIs3D(true);
  };

  const handleMouseOut = () => {
    setIs3D(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className={`transition duration-500 ${is3D ? 'w-16 h-16 bg-blue-500 rounded-lg shadow-md transform rotate-x-45 rotate-y-45' : 'w-16 h-16 bg-blue-500'}`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {is3D && (
          <div className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-50 transform -rotate-x-45 -rotate-y-45" />
        )}
      </div>
    </div>
  );
};

export default App;