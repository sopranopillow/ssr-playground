import React from "react";
import { Button, makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    color: "red",
  },
});

export const App: React.FC = () => {
  const styles = useStyles();

  return <Button className={styles.root}>Hello from Client</Button>;
};
