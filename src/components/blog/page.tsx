import styles from './styles.module.css'
 
export default function Page({ children }: { children: React.ReactNode }) {
  return <div className={styles.blog}>{children}</div>
}