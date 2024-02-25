const HStatistic = () => {
  return (
    <div className="w-1/2 rounded-xl bg-background flex flex-row justify-around items-center m-1 shadow-cos shadow-black">
      <div className="flex flex-col justify-center items-center p-1 m-1 gap-2">
        <h4 className="text-primary text-xl font-[800]">20M</h4>
        <p className="text-center text-sm">Number of Supporters</p>
      </div>
      <div className="flex flex-col justify-center items-center p-1 m-1 gap-2">
        <h4 className="text-primary text-xl font-[800]">63K+</h4>
        <p className="text-center text-sm">Weve Helped Raise</p>
      </div>
      <div className="flex flex-col justify-center items-center p-1 m-1 gap-2">
        <h4 className="text-primary text-xl font-[800]">20M</h4>
        <p className="text-center text-sm">Number of Supporters</p>
      </div>
    </div>
  );
};

export default HStatistic;
