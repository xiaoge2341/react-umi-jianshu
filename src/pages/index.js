import styles from './index.less';
import Writer from './components/Writer'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
// import { formatMessage } from 'umi-plugin-locale';
export default function() {
  return (
    <div className={styles.HomeWrapper}>
      <div className={styles.HomeLeft}>
        <img className={styles.banner_img} src="https://upload.jianshu.io/admin_banners/web_images/4894/23ecc55accf5c6a6c9910be966c125853d1f04a5.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
        <Topic />
        <List />
      </div>
      <div className={styles.HomeRight}>
        
        <Recommend />
        <Writer />
      </div>
    </div>
  );
}
