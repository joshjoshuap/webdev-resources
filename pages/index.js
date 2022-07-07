const HomePage = () => {
  return (
    <>
      <header>
        <h1 class="header-title"> WEB DEVELOPER ROADMAP </h1>
        <p class="header-description">
          My Personal roadmap and guide to learn and study web development. Contains Links, websites
          and sample projects
        </p>

        <a href="#navigation" class="header-btn">
          Lets Study
        </a>
      </header>
      <nav id="navigation">
        <a href="#frontend" class="navigation-btn">
          FRONT END
        </a>
        <a href="#backend" class="navigation-btn">
          BACKEND END
        </a>
        <a href="#fullstack" class="navigation-btn">
          FULLSTACK
        </a>
        <a href="#challenges" class="navigation-btn">
          CHALLENGES
        </a>
        <a href="#tools" class="navigation-btn">
          TOOLS
        </a>
      </nav>
    </>
  );
};

export default HomePage;
