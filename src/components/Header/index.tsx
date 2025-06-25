import { HeaderTitle } from '../HeaderTitle/index';


import '../../styles/root/index.css'
import styles from './styles.module.css';
import { MoonIcon, PenIcon, PersonStandingIcon, SunIcon } from 'lucide-react';
import { useContext, useEffect, useState, type ReactNode } from 'react';

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
  const isMediumOrLarger = screenSize >= 'md';


   function handleMenu(){
     setActive(!isActive)
     if(isActive){
        const nav = document.querySelector('nav');
        nav.style.display = 'none';  
     } else {
        nav.style.display = 'none';  
     }
   }

  return(
        <div className={styles.compContainer}>
            <section className={styles.logo}>
                <h2>My Notebook</h2>
            </section>

        {isMediumOrLarger ? (
         <section >
             <h2 onClick={handleMenu}>MENU</h2>
             {isActive && <nav className={isActive ? `${styles.displayMenu} ${console.log(isActive)}` : `${styles.hidden}`}>
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
            
             
            <section>
                <button type="submit"  className={styles.btnTheme} onClick={handleThemeChange}>
                    <HeaderTitle title="Themes">
                        {icons[theme]}
                    </HeaderTitle>  
                </button>
            </section>
        </div>
    );
}