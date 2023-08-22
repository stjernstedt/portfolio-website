import React from 'react';

const Paper = ({ className, children }) => {
	return <div className={`rounded-xl bg-slate-200 p-6 py-4 shadow-md shadow-gray-500 ring-gray-500 ${className}`}>{children}</div>;
};

export default Paper;
