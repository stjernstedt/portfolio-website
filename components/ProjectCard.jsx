const ProjectCard = ({ children }) => {
	return (
		<div className='grid w-fit max-w-[520px] grid-cols-2 rounded-xl bg-slate-200 shadow-xl'>
			{children.map((child) => {
				return (
					<div key={child} className='p-4'>
						{child}
					</div>
				);
			})}
		</div>
	);
};

export default ProjectCard;
