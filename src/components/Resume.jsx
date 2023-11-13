import styles from "./resume.module.css";
import rexter from "../images/rexter.png";

export default function Resume({ children }) {
  return (
    <div className={styles.container}>
      {children}
      <div className={styles.profile}>
        <div className={styles.profileContainer}>
          <div className={styles.profileImage}>
            <img src={rexter} />
          </div>
          <div className={styles.profileName}>
            <h1>Richard Terrence Go</h1>
            <h5>Front-End Developer</h5>
            <div className={styles.profileSummary}>
              <p>
                A graduate of Bootcamp equipped with coding language as my
                strength.And eager to learn deeper to improve my skill and
                ability to create a quality application if I will be hired by
                your good company for the role. I am passionate to adapt the
                trend technology stacks.
              </p>
              <a href="./cv.pdf">Download</a>
            </div>
          </div>
        </div>
        <div className={styles.profileInfo}>
          <h2 className={styles.title}>Contact Info</h2>
          <ul>
            <li>+63 960 422 9888</li>
            <li>richardterrencego@gmail.com</li>
            <li>https://facebook/rex14storm/</li>
            <li>Tacloban City,Leyte,Philippines</li>
          </ul>
        </div>
        <div className={styles.profileEducation}>
          <h2 className={styles.title}>Education</h2>
          <h5>2002-2008</h5>
          <ul>
            <li>ADFC - BSCOE</li>
          </ul>
          <h5>2000-2002</h5>
          <ul>
            <li>ADFC - BSCS</li>
          </ul>
        </div>
        <div className={styles.profileTraining}>
          <h2 className={styles.title}>Training</h2>
          <h5>2022-2023</h5>
          <ul>
            <li>Bootcamp</li>
          </ul>
        </div>
        <div className={styles.profileInterest}>
          <h2 className={styles.title}>Interest</h2>
          <ul>
            <li>Gaming</li>
            <li>Reading</li>
            <li>Cooking</li>
          </ul>
        </div>
      </div>
      <div className={styles.profileAbout}>
        <div className={styles.profileSkill}>
          <h2 className={styles.title}>Skill</h2>
          <div className={styles.progress}>
            <ul>
              <li>
                <h3>REACTJS</h3>
              </li>
            </ul>
            <div className={styles.progressbar1}>
              <div className={styles.progresscolor1}>70%</div>
            </div>
          </div>
          <div className={styles.progress}>
            <ul>
              <li>
                <h3>VITE</h3>
              </li>
            </ul>
            <div className={styles.progressbar2}>
              <div className={styles.progresscolor2}>60%</div>
            </div>
          </div>
          <div className={styles.progress}>
            <ul>
              <li>
                <h3>LARAVEL</h3>
              </li>
            </ul>
            <div className={styles.progressbar3}>
              <div className={styles.progresscolor3}>50%</div>
            </div>
          </div>
          <div className={styles.progress}>
            <ul>
              <li>
                <h3>HTML/CSS</h3>
              </li>
            </ul>
            <div className={styles.progressbar4}>
              <div className={styles.progresscolor4}>80%</div>
            </div>
          </div>
          <div className={styles.progress}>
            <ul>
              <li>
                <h3>BOOTSTRAP</h3>
              </li>
            </ul>
            <div className={styles.progressbar5}>
              <div className={styles.progresscolor5}>70%</div>
            </div>
          </div>
        </div>
        <div className={styles.profileSoftSkill}>
          <h2 className={styles.title}>Soft-Skills</h2>
          <div className={styles.progress}>
            <ul>
              <li>
                <h3>COMMUNICATION</h3>
              </li>
            </ul>
            <div className={styles.progressSoftbar1}>
              <div className={styles.progressSoftcolor1}>70%</div>
            </div>
          </div>
          <div className={styles.progress}>
            <ul>
              <li>
                <h3>TEAMWORK</h3>
              </li>
            </ul>
            <div className={styles.progressSoftbar2}>
              <div className={styles.progressSoftcolor2}>60%</div>
            </div>
          </div>
          <div className={styles.progress}>
            <ul>
              <li>
                <h3>ADAPTABILITY</h3>
              </li>
            </ul>
            <div className={styles.progressSoftbar3}>
              <div className={styles.progressSoftcolor3}>75%</div>
            </div>
          </div>
          <div className={styles.progress}>
            <ul>
              <li>
                <h3>TIME_MANAGEMENT</h3>
              </li>
            </ul>
            <div className={styles.progressSoftbar4}>
              <div className={styles.progressSoftcolor4}>65%</div>
            </div>
          </div>
        </div>
        <div className={styles.profileExperience}>
          <h2 className={styles.title}>Experience</h2>
          <ul>
            <li>
              Maintained positive working relationship with fellow staff and
              management.
            </li>
            <li>
              Documented test result data and value of materials to maintain
              shipping, receiving and production records.
            </li>
            <li>
              Promoted high customer satisfaction by resolving problems with
              knowledgeable and friendly service.
            </li>
            <li>Understood and followed oral and written directions.</li>
            <li>
              Prioritized and organized tasks to efficiently accomplish service
              goals
            </li>
          </ul>
        </div>
        <div className={styles.profileProject}>
          <h2 className={styles.title}>Projects</h2>
          <ul>
            <li>
              Mini-Project1 we created a Tattoo Website the technology we use is
              HTML,CSS,JavaScript for the project we showcase Online booking and
              appointment scheduling.
            </li>
            <li>
              Major-Project2 we created an API driven app using the technology
              ReactJS,React Bootstrap for the front-end Webpage design and
              Postman,MySQL fetching the data to the server.
            </li>
            <li>
              Capstone-Project we created a E-Commerce website using the
              technology ReactJS,React Booststrap for the front-end Postman API
              for the development toolchain,MySQL, PHP MyAdmin and Laravel for
              the back-end.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
