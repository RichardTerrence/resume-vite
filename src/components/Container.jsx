import styles from "./container.module.css";
import eye from "../images/eye.jpg";
import {
  GiBasketballJersey,
  GiBookshelf,
  GiCommercialAirplane,
  GiPhone,
  GiOpenFolder,
} from "react-icons/gi";
import { GrFacebook } from "react-icons/gr";
import { ImLocation } from "react-icons/im";
export default function Container({ children }) {
  return (
    <div className={styles.container}>
      {children}
      <div className={styles.profile}>
        <div className={styles.profileContainer}>
          <div className={styles.profileImg}>
            <img src={eye} alt="Richard Terrence" />
          </div>
          <div className={styles.profileDescription}>
            <h1 className={styles.profileName}>Richard Terrence Go</h1>
            <h2>Front End Developer</h2>
            <p className={styles.aboutProfile}>
              A graduate of Bootcamp equipped with coding language as my
              strength.And eager to learn deeper to improve my skill and ability
              to create a quality application if I will be hired by your good
              company for the role. I am passionate to adapt the trend
              technology stacks.
            </p>
            <a href="./cv.pdf">Download</a>
          </div>
        </div>
      </div>
      <div className={styles.grp1}>
        <div className={styles.contactInfo}>
          <h2 className={styles.title}>Contact Info</h2>
          <div className={styles.icon}>
            <GiPhone /> <p>+63 123 000 911</p>
          </div>
          <div className={styles.icon}>
            <GiOpenFolder /> <p>goryongtrapps@raket.pk</p>
          </div>
          <div className={styles.icon}>
            <GrFacebook /> <p>facebook</p>
          </div>
          <div className={styles.icon}>
            <ImLocation /> <p>Philippines</p>
          </div>
        </div>
        <div className={styles.education}>
          <h2 className={styles.title}>Education</h2>
          <p>2002-2008</p>
          <ul>
            <li>
              <h3>BSCOE</h3>
            </li>
          </ul>
        </div>
        <div className={styles.training}>
          <h2 className={styles.title}>Training</h2>
          <ul>
            <li>Bootcamp</li>
          </ul>
        </div>
        <div className={styles.interest}>
          <h2 className={styles.title}>Interest</h2>
          <div className={styles.icon}>
            <GiBasketballJersey />
            <p>Gaming</p>
          </div>
          <div className={styles.icon}>
            <GiBookshelf />
            <p>Reading</p>
          </div>
          <div className={styles.icon}>
            <GiCommercialAirplane />
            <p>Travel</p>
          </div>
        </div>
      </div>
      <div className={styles.grp2}>
        <div className={styles.experience}>
          <h2 className={styles.title}>Work Experience</h2>
          <p>2010 - 2019</p>
          <ul>
            <li>
              Tested and installed motherboards,processors and graphics cards on
              desktops and laptops for corporate staff.
            </li>
            <li>
              Assessed system hardware and software and suggested modifications
              to reduce lag time and improve overall speed.
            </li>
            <li>Set up and maintained user accounts and client access.</li>
          </ul>
        </div>
        <div className={styles.skills}>
          <h2 className={styles.title}>Skills</h2>
          <div className={styles.progress1}>
            <h3>REACT JS</h3>
            <div className={styles.progressbar1}>
              <div className={styles.progressColor1}>70%</div>
            </div>
          </div>
          <div className={styles.progress2}>
            <h3>VITE</h3>
            <div className={styles.progressbar2}>
              <div className={styles.progressColor2}>60%</div>
            </div>
          </div>
          <div className={styles.progress3}>
            <h3>BOOTSTRAP</h3>
            <div className={styles.progressbar3}>
              <div className={styles.progressColor3}>75%</div>
            </div>
          </div>
          <div className={styles.progress4}>
            <h3>LARAVEL</h3>
            <div className={styles.progressbar4}>
              <div className={styles.progressColor4}>50%</div>
            </div>
          </div>
          <div className={styles.progress5}>
            <h3>HTML</h3>
            <div className={styles.progressbar5}>
              <div className={styles.progressColor5}>80%</div>
            </div>
          </div>
          <div className={styles.progress6}>
            <h3>CSS</h3>
            <div className={styles.progressbar6}>
              <div className={styles.progressColor6}>80%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
