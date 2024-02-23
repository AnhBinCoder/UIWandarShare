import GlobalHeroFilter from "../common/GlobalHeroFilter";

const HeroFilter = () => {
    return (
        <div className="home_content">
            <div className="home-text text-center">
                <h2 className="fz55">We Find The Best Timeshares For You</h2>
                <p className="fz18 color-white">
                    EXPLORE MORE. TRAVEL MORE. EXPERIENCE MORE.
                </p>
            </div>
            {/* End .home-text */}

            <GlobalHeroFilter />
        </div>
    );
};

export default HeroFilter;
