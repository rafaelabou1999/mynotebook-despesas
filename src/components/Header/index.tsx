import { HeaderTitle } from '../HeaderTitle/index';


import '../../styles/root/index.css'
import styles from './styles.module.css';
import { MoonIcon, PenIcon, PersonStandingIcon, SunIcon } from 'lucide-react';
import { useContext,  useState, type ReactNode } from 'react';

import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../theme/ThemeProvider';
import { useScreenSize } from '../../hooks/Responsive';

export type ThemeProps = 'dark' | 'light';

const icons: Record<ThemeProps,ReactNode> = {
    dark: <SunIcon/>,
    light: <MoonIcon/>
}

export function Header() {
  const context = useContext(ThemeContext);
  if(!context) throw new Error('ThemeContext must be used within ThemeProvider');

  const {theme, handleThemeChange} = context;

  const [isActive, setActive]= useState(false);
  const screenSize = useScreenSize();
  const isMediumOrLarger = screenSize === 'xs';


   function handleMenu(){
    setActive(!isActive)
   }

  return(
        <div className={styles.compContainer}>
            <Link to="/" className={styles.linkLogo}>
              <section className={styles.logo}>
                <h2>My Notebook</h2>
              </section>
            </Link>
        
        <div className={styles.rightMenu}>  
        {isMediumOrLarger ? (
         <section >
             <h2 className={styles.menuTitle} onClick={handleMenu}>MENU </h2>
             <div  className={isActive ? `${styles.display} ${styles.triangle}` : `${styles.hidden}`}></div>
             {isActive && <nav className={isActive ? `${styles.displayMenu}` : `${styles.hidden}`}>
                    <Link to="/">
                        <HeaderTitle title="Cadastro de Produto">
                            <PenIcon/>
                        </HeaderTitle>
                    </Link>   
                    <Link to="/profile">
                        <HeaderTitle title="Orçamento">
                          <PersonStandingIcon/>
                        </HeaderTitle>
                    </Link>                        
                </nav>}   
            </section>
        ) :   (
           <section>
                <nav>
                    <Link to="/">
                        <HeaderTitle title="Cadastro de Produto">
                            <PenIcon/>
                        </HeaderTitle>
                    </Link>   
                    <Link to="/profile">
                        <HeaderTitle title="Orçamento">
                          <PersonStandingIcon/>
                        </HeaderTitle>
                    </Link>                        
                </nav>
                
            </section>
        )}
            
    {isMediumOrLarger ? (
        <section>
                <button type="submit"  className={styles.btnTheme} onClick={handleThemeChange}>
                    <HeaderTitle title="">
                        {icons[theme]}
                    </HeaderTitle>  
                </button>
            </section>) : 
            (
        <section>
            <button type="submit"  className={styles.btnTheme} onClick={handleThemeChange}>
                <HeaderTitle title="Themes">
                        {icons[theme]}
                    </HeaderTitle>  
            </button>
        </section>
    ) }
            
            </div>
        </div>
    );
}