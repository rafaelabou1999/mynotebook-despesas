import styles from './styles.module.css';

type HeaderTitleProps = {
    children: React.ReactNode;
    title: string;
}

export function HeaderTitle({ children, title }: HeaderTitleProps) {
    return (
        <>
           <div className={styles.box}>
                <div className="icon">
                    {children}
                </div>
                <div className={styles.title}>
                    <h3>{title}</h3>
                </div>
            </div>
        </>
    );
}