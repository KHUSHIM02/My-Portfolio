// import React from 'react'
// import styles from './Experience.module.css'

// const Experience = () => {
//   return (
//     <div></div>

//   )
// }

// export default Experience;


import { useCallback } from 'react';
import styles from './Experience.module.css';
const Experience = () => {
	const onGroupContainer4Click = useCallback(() => {
		// Add your code here
	}, []);
	return (
		<div className={styles.myWorkExperienceParent} onClick={onGroupContainer4Click}>
			<div className={styles.myWorkExperience1}>My Work Experience</div>
			<div className={styles.fixieTechnologiesParent}>
				<div className={styles.fixieTechnologies}>Fixie Technologies</div>
				<div className={styles.june20201}>June 2020 - December 2021</div>
			</div>
			<div className={styles.naxumParent}>
				<div className={styles.fixieTechnologies}>{`NaXum `}</div>
				<div className={styles.june20201}>March 2022 - Present</div>
			</div>
			<div className={styles.frontEndDeveloperParent}>
				<div className={styles.frontEndDeveloper}>Front-End Developer</div>
				<div className={styles.myResponsiblitiesAre1}>My Responsiblities are to create UI Design From Client’s Input and Create a Functional front-end for the website</div>
			</div>
			<div className={styles.uiDesignerParent}>
				<div className={styles.uiDesigner}>UI Designer</div>
				<div className={styles.iWorkedAs1}>I Worked as Generalist UI Designer, Creating Mockups and Prototypes That help Developers and Clients visualise the End product Before Production.</div>
			</div>
			<img className={styles.groupChild} alt="" src="Group 28.svg" />
			<img className={styles.image6Icon} alt="" src="image 6.png" />
		</div>);
};
export default Experience;