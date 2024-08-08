// Libraries
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
// Style
import style from "./DesktopNavbar.module.css";
// Components
import HeaderNav from "../HeaderNav/HeaderNav";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";

function DesktopNavbar(): React.ReactElement {
  return (
    <HeaderNav>
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
    </HeaderNav>
  );
}

export default DesktopNavbar;
