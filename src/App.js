// REACT
import React, { useState, useEffect } from "react";
// COMPONENT
import Year from "./components/Year/Year";
import Gallery from "./components/Gallery/Gallery";
import Modal from "./components/Modal/Modal";
// FIXTURES
import semesters from "./fixtures/semesters";
import papers from "./fixtures/papers";
// CSS MODULE
import classes from "./App.module.css";

function App() {
  const [clgYear, setClgYear] = useState(0);
  const [clgSem, setClgSem] = useState(0);
  const [semArray, setSemArray] = useState([]);
  const [papersArray, setPapersArray] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setPapersArray(papers);
  }, []);

  const yearHandler = (year) => {
    if (clgYear === 0) {
      setClgYear(year);
    } else if (clgYear !== year) {
      setClgYear(year);
      setClgSem(0);
    } else {
      setClgSem(0);
      setClgYear(0);
    }
    setSemArray(semesters[year - 1].sems);
  };

  const semHandler = (sem) => {
    if (clgSem === 0) {
      return setClgSem(sem);
    } else if (clgSem !== sem) {
      setClgSem(sem);
    } else {
      setClgSem(0);
    }
  };

  const creditHanlder = () => {
    modal ? setModal(false) : setModal(true);
  };

  return (
    <div className={classes.App}>
      <div className={classes.Header}>
        <p className={classes.Heading}>ExSa</p>
        <p className={classes.FullForm}>Exam Saviour</p>
        <p className={classes.SubHeading}>
          Exam question papers repository for TIET, Derabassi
        </p>
      </div>
      <div className={classes.Content}>
        <div className={classes.Filter}>
          <p>
            <i className="far fa-hand-point-right"></i> Select appropriate year
            and semester to see relevent exam question papers
          </p>
          <p>
            <i className="far fa-hand-point-right"></i> Click on the same option
            again to remove the filter.
          </p>
        </div>
        <div className={classes.Years}>
          {semesters.map((year) => {
            return (
              <Year
                key={year.year}
                clgYear={clgYear}
                clicked={() => yearHandler(year.year)}
              >
                {year.year}
              </Year>
            );
          })}
        </div>
        {/* YEAR SELECTION COMPLETED*/}
        {semArray.length > 0 ? (
          <div className={classes.Sems}>
            {semArray.map((sem) => (
              <div
                key={sem}
                className={`${classes.SemItems} ${
                  clgSem === sem ? classes.ActiveSemItem : null
                }`}
                onClick={() => semHandler(sem)}
              >
                <i className="fas fa-book-reader"></i> {`Semester ${sem}`}
              </div>
            ))}
          </div>
        ) : null}
        {/* SEM SELECTION COMPLETED*/}
        {papersArray.length > 0 ? (
          <Gallery year={clgYear} semester={clgSem}>
            {papersArray}
          </Gallery>
        ) : (
          <div className={classes.Loader}>loading...</div>
        )}
      </div>
      <a
        className={classes.Contribute}
        href="https://www.github.com/daxter-army/ex-sa"
        target="_blank"
        rel="noreferrer"
      >
        Contribute
      </a>
      <button className={classes.Credits} onClick={creditHanlder}>
        Credits
      </button>
      {modal ? <Modal closeHandler={creditHanlder} /> : null}
    </div>
  );
}

export default App;
