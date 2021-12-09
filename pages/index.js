import Projects from '../components/Projects';
import { sanityClient, urlFor } from '../lib/sanity';

const projectsQuery = `*[_type == 'project']{
  _id,
  name,
  demo,
  slug,
  dateCreated,
  description,
  image,
  type,
  github,
  technology
}`;

export default function Index({ projects }) {
  return (
    <>
      <div className="hero-section ">
        <div className="hero-pattern absolute-top gr-abs-top w-100 z-index-n1">
          <img src="/hero-pattern.webp" alt="" />
        </div>
        <div className="container">
          <div className="row justify-content-start gr-pt-lg-14 gr-pb-lg-14 gr-pt-12 gr-pb-7">
            <div className="col-lg-12">
              <div className="hero-content text-center portfolio-card-hover">
                <div className="gr-pb-10">
                  <img src="/AvatarMaker.png" className="card-image rounded-pill" />
                </div>
                <span className="gr-text-10 font-weight-bold text-uppercase gr-pb-8 d-inline-block letter-spacings-1">
                  Hi, I am Muhammad Adebayo
                </span>
                <h2 className="gr-text-2 font-weight-bold">
                  Frontend Developer <br /> based in lagos.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Projects */}
      <Projects projects={projects} />
      <div id="container" />
      <div className="gr-pt-lg-17 gr-pb-lg-13 gr-pt-9 gr-pb-9 ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-11 text-center">
              <h2 className="gr-text-3 font-weight-bold gr-px-xl-7">
                I am taking new projects. Waiting to hearing about new projects, so if you'd like to
                chat please get in touch.
              </h2>
              <ul className="links-inline d-flex flex-wrap justify-content-center gr-pt-md-11 gr-pt-10 pl-0">
                <li className="text-uppercase border-right-sm font-weight-bold gr-text-12 letter-spacing-1_63">
                  <a
                    href="mailto:adebayomuhammad47@gmail.com"
                    className="gr-px-7  d-inline-block btn-hover-translate">
                    <span>Email</span>
                  </a>
                </li>
                <li className="text-uppercase font-weight-bold gr-text-12 letter-spacing-1_63">
                  <a
                    href="https://www.linkedin.com/in/adebayo-mohammed"
                    className="gr-px-7 d-inline-block btn-hover-translate">
                    <span>Linkedin</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const projects = await sanityClient.fetch(projectsQuery);
  return {
    props: {
      projects
    }
  };
}
