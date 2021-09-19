import React, { ReactElement } from 'react';
import styles from './Header.module.css';
import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import MapIcon from '@icons/MapIcon';
import ListIcon from '@icons/ListIcon';
import BarChartIcon from '@icons/BarChartIcon';
import { useRouter } from 'next/router';
import SignInIcon from '@icons/SignInIcon';

interface ITabProp {
    icon: React.FC | ReactElement;

    title: string;

    href: string;
}

const Tab: React.FC<ITabProp> = ({ icon, title, href }) => {
    const router = useRouter();

    return (
        <Link href={href}>
            <a className={styles.navigator__navTab}>
                <div
                    className={
                        router.pathname === href
                            ? `${styles.navTab__status} ${styles.navTab__status_mode_active}`
                            : styles.navTab__status
                    }
                />
                <div className={styles.navTab__navTitle}>
                    {typeof icon === 'function' ? icon({}) : icon}
                    <span className={styles.navTitle__text}>{title}</span>
                </div>
            </a>
        </Link>
    );
};

export type IHeaderProp = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Header: React.FC<IHeaderProp> = props => {
    return (
        <div {...props} className={styles.container}>
            <div className={styles.container__stack}>
                <div className={styles.stack__side}>
                    <div className={styles.side__spacer} />
                    <div className={`${styles.side__sideContent} ${styles.side__sideContent_align_start}`}>
                        <Link href={'/'}>
                            <a className={styles.sideContent__link}>
                                <span className={styles.sideContent__title}>Bip-Bap</span>
                            </a>
                        </Link>
                    </div>
                    <div className={styles.side__spacer_align_inner} />
                </div>

                <div className={styles.stack__navigator}>
                    <Tab href={'/map'} icon={MapIcon} title={'Карта'} />
                    <Tab href={'/list'} icon={ListIcon} title={'Список датчиков'} />
                    <Tab href={'/rating'} icon={BarChartIcon} title={'Рейтинг городов'} />
                    {/*<Tab href={'/subscriptions'} icon={NotificationsIcon} title={'Подписки'} />*/}
                    {/*<Tab href={'/saved'} icon={BookmarkIcon} title={'Избранные датчики'} />*/}
                </div>

                <div className={styles.stack__side}>
                    <div className={styles.side__spacer_align_inner} />
                    <div className={`${styles.side__sideContent} ${styles.side__sideContent_align_end}`}>
                        <Button variant={'outline'} paddingX={8} leftIcon={<SignInIcon />}>
                            Войти
                        </Button>
                    </div>
                    <div className={styles.side__spacer} />
                </div>
            </div>
        </div>
    );
};

export default Header;
