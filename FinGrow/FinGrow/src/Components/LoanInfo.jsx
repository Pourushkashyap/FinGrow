const Loaninfo = ({ amount, totalRepayment }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md w-[700px] text-left mb-3 hover:shadow-lg pb-10">
        <div className="flex justify-between font-bold px-8 mb-[-6px]">
            <p className="font-light text-lg">I need a loan</p>
            <p className="text-lg">{amount ? amount.toLocaleString() : 'N/A'}</p>
        </div>
        <div className="flex justify-between font-bold px-8 mb-[-6px]">
            <p className="font-light text-lg">First date of payment</p>
            <p className="text-lg">06.03.2025</p>
        </div>
        <div className="flex justify-between font-bold px-8">
            <p className="font-light text-lg">Total payment amount</p>
            <p className="font-semibold text-lg text-black">{totalRepayment ? totalRepayment.toLocaleString() : 'N/A'}</p>
        </div>
    </div>
    );
}

export default Loaninfo;
