import Link from 'next/link';
import styles from "./header.module.css";

export default function Header() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <Link href="/">
                    <div className={styles.logo}>
                        <picture>
                            <source type="image/webp" sizes="(max-width: 1650px) 1235px,
                                    (max-width: 2450px) 1852px,
                                    (max-width: 3300px) 2468px,
                                    (max-width: 412px) 309px,
                                    (max-width: 620px) 463px,
                                    (max-width: 1235px) 926px,
                                    618px"
                                srcSet="/logo/logo.webp 618w,
                                    /logo/logo@0.5x.webp 309w,
                                    /logo/logo@0.75x.webp 463w,
                                    /logo/logo@1.5x.webp 926w,
                                    /logo/logo@2x.webp 1235w,
                                    /logo/logo@3x.webp 1852w,
                                    /logo/logo@4x.webp 2468w"
                            />
                            <img id={styles.logo} src="/logo/logo.png" sizes="(max-width: 1650px) 1235px,
                                    (max-width: 2450px) 1852px,
                                    (max-width: 3300px) 2468px,
                                    (max-width: 412px) 309px,
                                    (max-width: 620px) 463px,
                                    (max-width: 1235px) 926px,
                                          618px"
                                 srcSet="/logo/logo.png 618w,
                                    /logo/logo@0.5x.png 309w,
                                    /logo/logo@0.75x.png 463w,
                                    /logo/logo@1.5x.png 926w,
                                    /logo/logo@2x.png 1235w,
                                    /logo/logo@3x.png 1852w,
                                    /logo/logo@4x.png 2468w"
                                 alt="Madhouse Miners Logo" />
                        </picture>
                    </div>
                </Link>
                <div className={styles.links}>
                    <Link href="/reset-password">Reset Password</Link>
                    <Link href="/register">Register</Link>
                    <Link href="/login">Login</Link>
                </div>
            </div>
        </div>
    )
}