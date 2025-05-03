import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import { useColorMode } from '@docusaurus/theme-common';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { colorMode } = useColorMode();
  const isDarkTheme = colorMode === 'dark';
  
  return (
    <header className={styles.heroBanner}>
      {isDarkTheme && (
        <>
          <div className={styles.heroBlob + ' ' + styles.blob1}></div>
          <div className={styles.heroBlob + ' ' + styles.blob2}></div>
          <div className={styles.heroBlob + ' ' + styles.blob3}></div>
        </>
      )}
      
      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          <div className={styles.heroHeadline}>一即全，全即一</div>
          <Heading as="h1" className={styles.heroTitle}>
            IMC <span className={styles.highlightText}>百科</span>
          </Heading>
          <p className={styles.heroSubtitle}>
            IMC玩家编写的服务器教程，简单易懂。无论你是新手还是有经验的玩家，都能在这里找到有用的知识。
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button', styles.primaryButton)}
              to="/docs/intro">
              开始探索 🚀
            </Link>
          </div>
        </div>
        
        <div className={styles.heroImageWrapper}>
          <div className={styles.heroImageContainer}>
            <img 
              src="/img/logo.png"
              alt="IMC 服务器教程" 
              className={styles.heroImage}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

function HomeFooterCTA() {
  return (
    <section className={styles.footerCta}>
      <div className="container">
        <Heading as="h2" className={styles.footerCtaTitle}>
          准备好开始你的 <span className={styles.textHighlight}>IMC</span> 服务器旅程了吗？
        </Heading>
        <p className={styles.footerCtaSubtitle}>
          我们提供服务器玩法介绍、名人列表。无论你是新手还是有经验的玩家，这里都有适合你的内容。
        </p>
        <div>
          <Link
            className={clsx('button button--primary button--lg')}
            to="/">
            立即开始
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.customFields.titlePrefix || siteConfig.title}
      description={siteConfig.tagline}
      wrapperClassName="homepage">
      <HomepageHeader />
      <main className={styles.homeMain}>
        <HomepageFeatures />
        <HomeFooterCTA />
      </main>
    </Layout>
  );
}