import styles from "./avatar.module.css";
import { AvatarProps } from "./avatar.types";

export const Avatar = ({ gender = "Other" }: AvatarProps) => {
  return <div className={styles.container}>Avatar</div>;
};
