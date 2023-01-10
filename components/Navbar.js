import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const router = useRouter();
  const asPath = useRouter();
  const current = asPath.asPath
 

  console.log({current})

  const onBookmark = () => {
    router.push("/bookmark");
  };

  const onHome = () => {
    router.push("/");
  };

 const [home, setHome] = useState(<button  onClick={onHome} className={classes.bigButton}>Home</button>)
  const [bmbut, setBmbut] = useState(
    <button onClick={onBookmark} className={classes.bmButton}>
      Bookmarks
    </button>
  );

  useEffect(() => {
if (current === "/bookmark") {
      setHome(<button className={classes.hbut} onClick={onHome}>Home</button>);
      setBmbut(
        <button onClick={onBookmark} className={classes.bigbmButton}>
          Bookmarks
        </button>
      );
    }
  }, []);



  return (
    <Fragment>
      <nav className={classes.Navbar}>
        {home}
        {bmbut}
      </nav>
    </Fragment>
  );
};

export default Navbar;
