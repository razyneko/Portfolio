import React from 'react'
import styles from './SkillsStyles.module.css'; 
import SkillList from '../../common/SkillList';
import checkMarkDark from '../../assets/checkmark-dark.svg'
import checkMarkLight from '../../assets/checkmark-light.svg'
import { useTheme } from '../../common/ThemeContext';
const Skills = () => {
  const { theme, toggleTheme } = useTheme();
  const checkMarkIcon = theme === 'light' ?  checkMarkLight: checkMarkDark;
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList 
            src={checkMarkIcon}
            skill="Go"
            />
             <SkillList 
            src={checkMarkIcon}
            skill="JavaScript"
            />
             <SkillList 
            src={checkMarkIcon}
            skill="React"
            />
             <SkillList 
            src={checkMarkIcon}
            skill="API Development"
            />
             <SkillList 
            src={checkMarkIcon}
            skill="MySQL"
            />
            <SkillList 
            src={checkMarkIcon}
            skill="Git/Github"
            />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList 
            src={checkMarkIcon}
            skill="HTML"
            />
             <SkillList 
            src={checkMarkIcon}
            skill="CSS/Tailwind"
            />
             <SkillList 
            src={checkMarkIcon}
            skill="Responsive Web Design"
            />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList 
            src={checkMarkIcon}
            skill="Python"
            />
             <SkillList 
            src={checkMarkIcon}
            skill="Numpy"
            />
             <SkillList 
            src={checkMarkIcon}
            skill="Matplotlib"
            />
             <SkillList 
            src={checkMarkIcon}
            skill="Seaborn"
            />
             <SkillList 
            src={checkMarkIcon}
            skill="Pandas"
            />
        </div>
    </section>
  )
}

export default Skills