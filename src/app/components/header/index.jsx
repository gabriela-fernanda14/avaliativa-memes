import styles from "./header.module.css";

const Header = ({ logo, navItens }) => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1>{logo[0].title}</h1>
                <span>🌟</span>
            </div>
            <nav className={styles.nav}> 
                {navItens.map((navItem, item) => (
                    <a
                        key={navItem.id}
                        href="#"
                        // Adiciona a classe 'active' ao primeiro item do array de navegação (home === 0)
                        className={item === 0 ? styles.active : undefined}
                    >
                        {navItem.title}
                    </a>
                ))}
            </nav>

            <div className={styles.userActions}>
                <button className={styles.notificationBtn}>🔔</button>
                <button className={styles.userAvatar}>
                    <img src="https://i.pravatar.cc/150?img=3" alt="Your profile" />
                </button>
            </div>
        </header>
    );
};

export default Header;

