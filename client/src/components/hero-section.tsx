const HeroSection = () => {
  return (
    <section
      className="flex flex-col justify-start items-center bg-primary w-screen py-5"
      id="home"
    >
      <h1
        className="font-rowdies text-wrap w-[300px] text-4xl font-[300] text-primary-foreground self-start
         p-5 m-5"
      >
        Offering aid to the less fortunate
      </h1>

      <div className=" rounded-xl bg-background flex flex-row justify-around items-center m-1 shadow-md">
        <div className="flex flex-col justify-center items-center p-1 m-1 gap-2">
          <h4 className="text-primary text-xl font-[800] underline underline-offset-4">
            20M
          </h4>
          <p className="text-center text-sm">Number of Supporters</p>
        </div>
        <div className="flex flex-col justify-center items-center p-1 m-1 gap-2">
          <h4 className="text-primary text-xl font-[800] underline underline-offset-4">
            63K+
          </h4>
          <p className="text-center text-sm">Weve Helped Raise</p>
        </div>
        <div className="flex flex-col justify-center items-center p-1 m-1 gap-2">
          <h4 className="text-primary text-xl font-[800] underline underline-offset-4">
            20M
          </h4>
          <p className="text-center text-sm">Number of Supporters</p>
        </div>
      </div>

      <h3 className="text-4xl font-[800] text-primary-foreground my-5 p-2">
        Watch Our Gallery
      </h3>

      <div className="relative m-1">
        <img
          alt="some photo"
          className="border-2 border-border rounded-2xl block w-full h-auto"
          src="https://media.istockphoto.com/photos/support-picture-id471401843?k=6&m=471401843&s=170667a&w=0&h=9VHTuaR7q60UJbpzi-oqLsowWUvTWA2rE8JBQs_tE7o="
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#03847B] via-transparent border-2 border-border rounded-2xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;
