// Libraries
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
// Style
import style from "./DesktopNavbar.module.css";
// Components
import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";

function DesktopNavbar(): React.ReactElement {
  return (
    <Nav>
      <div className={style.navbar}>
        <Logo />

        <AnimatePresence>
          <motion.div
            className={style.menuContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15 }}
            exit={{ opacity: 0 }}
          >
            <Menu />
          </motion.div>
        </AnimatePresence>
      </div>
    </Nav>
  );
}

export default DesktopNavbar;
