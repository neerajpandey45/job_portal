"use client"
import React from "react";
import { createPortal } from "react-dom";
import styles from "./model.module.css";
const Backdrop = () => {
  return <div className={styles.wrapper}></div>;
};
const Overlay = () => {
  return (
    <div className={styles.model}>
      <h6>sdbjbdsbc</h6>
    </div>
  );
};
export default function Scoping({}) {
  return (
    <>
      {createPortal(<Backdrop />, document.getElementById("backdrop"))}
      {createPortal(<Overlay />, document.getElementById("overlay"))}
    </>
  );
}
