// Libraries
import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Context
import { MenuContext } from "../../App";
// Style
import style from "./MobileNavbar.module.css";
// Components
import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";
import Arrow from "../../assets/img/icon-arrow.png";
import Menu from "../Menu/Menu";

function MobileNavbar(): React.ReactElement {
  const menu = useContext(MenuContext);

  return (
    <Nav>
      <motion.div
        animate={{
          height: menu?.isOpen ? "100%" : "3.75rem",
        }}
        transition={{ duration: 0.3 }}
        className={style.navbar}
      >
        <div className={style.iconsContainer}>
          <Logo />

          <button className={style.menuBtn} onClick={menu?.toggleMenu}>
            <motion.img
              animate={{ rotate: menu?.isOpen ? 180 : 0 }}
              src={Arrow}
              className={style.arrow}
              alt="Arrow icon to toggle menu"
            />
          </button>
        </div>

        <AnimatePresence>
          {menu?.isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.15 }}
              exit={{ opacity: 0 }}
              className={style.menu}
            >
              <Menu />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Nav>
  );
}

export default MobileNavbar;
