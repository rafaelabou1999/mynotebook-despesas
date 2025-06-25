import { HeaderTitle } from '../HeaderTitle/index';


import '../../styles/root/index.css'
import styles from './styles.module.css';
import { MoonIcon, PenIcon, PersonStandingIcon, SunIcon } from 'lucide-react';
import { useContext, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../theme/ThemeProvider';

export type ThemeProps = 'dark' | 'light';

const icons: Record<ThemeProps,ReactNode> = {
    dark: <SunIcon/>,
    light: <MoonIcon/>
}

export function Header() {
  const context = useContext(ThemeContext);
  if(!context) throw new Error('ThemeContext must be used within ThemeProvider');

  const {theme, handleThemeChange} = context;

  
  return(
        <div className={styles.compContainer}>
            <section className={styles.logo}>
                <h2>My Notebook</h2>
            </section>

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