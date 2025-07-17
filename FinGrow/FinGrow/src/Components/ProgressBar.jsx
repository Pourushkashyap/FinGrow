const Progressbar = ({ currentStep }) => {
    return (
        <div className="flex items-center justify-center mt-10 mb-8 gap-24">
            {Array.from({ length: 4 }, (_, index) => (
                <div key={index} className={`w-5 h-5 ${index < currentStep ? 'bg-green-600' : 'bg-gray-500'} rounded-full`}></div>
            ))}
        </div>
    );
}

export default Progressbar;
