const TechStack = () => {
  function downloadResume() {
    // fetch(resume).then((response) => {
    //   response.blob().then((blob) => {
    //     // Creating new object of PDF file
    //     const fileURL = window.URL.createObjectURL(blob);
    //     // Setting various property values
    //     let alink = document.createElement('a');
    //     alink.href = fileURL;
    //     alink.download = 'SamplePDF.pdf';
    //     alink.click();
    //   });
    // });
  }

  return (
    <section className="px-2 px-lg-5 mt-5 pt-5 stack" id="stack">
      <div className="d-flex align-items-start mb-5 header">
        <h3 className="header-title me-5">Tech Stack</h3>
        <button type="button" disabled onClick={downloadResume} className="header-btn">
          <span>View Resume</span>
        </button>
      </div>
      <div className="d-flex stack-list">
        <ul className="p-0">
          <li>React</li>
          <li>React Native</li>
          <li>Redux</li>
          <li>Tanstack Query</li>
          <li>Next Js</li>
          <li> Javascript</li>
          <li>Typescript</li>
          <li> Bootstrap</li>
          <li>Tailwind</li>
        </ul>
        <ul>
          <li>Vue</li>
          <li>Firestore</li>
          <li>Git</li>
          <li>HTML & CSS</li>
          <li>Sass</li>
          <li>GraphQL</li>
          <li>Netlify</li>
          <li>Heroku</li>
          <li>Firebase</li>
        </ul>
      </div>
    </section>
  );
};

export default TechStack;
