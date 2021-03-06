import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@components/organisms/Header';
import pageStyles from '@styles/Page.module.css';
import styles from './User.module.css';
import LabeledInput from '@components/atoms/LabeledInput';
import UserDefaultIcon from '@icons/UserDefaultIcon';
import { Button } from '@chakra-ui/react';
import SaveIcon from '@icons/SaveIcon';

const Subscriptions: NextPage = () => {
    return (
        <div className={pageStyles.container}>
            <Head>
                <title>Личный кабинет</title>
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Header />

            <div className={styles.container__main}>
                <div className={styles.main__header}>
                    <UserDefaultIcon height={20} width={20} />
                    <span className={styles.header__text}>Личный кабинет</span>
                </div>
                <div className={styles.main__credentials}>
                    <LabeledInput placeholder={'Email'} my={3} />
                    <LabeledInput placeholder={'Телефон'} my={3} />
                    <LabeledInput placeholder={'Старый пароль'} my={3} />
                    <LabeledInput placeholder={'Новый пароль'} my={3} />
                </div>
                <Button w={270} aria-label={'saveChanges'} leftIcon={<SaveIcon />}>
                    Сохранить изменения
                </Button>
            </div>
        </div>
    );
};

export default Subscriptions;
