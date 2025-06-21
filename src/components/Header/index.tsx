import { HeaderTitle } from '../HeaderTitle/index';


import '../../styles/root/index.css'
import styles from './styles.module.css';
import { MoonIcon, PenIcon, PersonStandingIcon, Search, SunIcon } from 'lucide-react';
import { useEffect, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

type ThemeProps = 'dark' | 'light';

const icons: Record<ThemeProps,ReactNode> = {
    dark: <SunIcon/>,
    light: <MoonIcon/>
}

export function Header() {
    const [theme, setTheme] = useState<ThemeProps>((): ThemeProps => {
        const themeStorage = localStorage.getItem('theme') as ThemeProps || 'light';
        return themeStorage;
    });
    
    function handleThemeChange(){
       setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    useEffect(() => {
       localStorage.setItem('theme', theme);
    }, [theme])
   
    return (
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