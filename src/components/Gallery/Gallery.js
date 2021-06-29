import React, { useState, useEffect } from "react";

import classes from "./Gallery.module.css";

const Gallery = (props) => {
  const [modArray, setModArray] = useState([]);
  useEffect(() => {
    const filteredArray = props.children.filter((item) => {
      if (props.year === 0 && props.semester === 0) {
        // DISPLAY ALL THE IMAGES
        return item;
      } else if (props.year !== 0 && props.semester === 0) {
        // DISPLAY FOR THE SELECTED YEAR
        return item.year === props.year;
      }
      // DISPLAY FOR THE SELECTED YEAR AND SEMESTER
      return item.year === props.year && item.sem === props.semester;
    });

    setModArray(filteredArray);
  }, [props.children, props.year, props.semester]);
  return (
    <div className={classes.Gallery}>
      {modArray.length > 0 ? (
        modArray.map((paper) => {
          return (
            <a
              key={paper.id_}
              href={paper.image}
              download={`year_${paper.year}_sem_${paper.sem}_${paper.sub}_${paper.type}_question_paper.jpg`}
            >
              <div className={classes.GalleryItem}>
                <div className={classes.Label}>
                  <div>
                    <p className={classes.H1}>Year {paper.year}</p>
                    <p className={classes.H2}>Sem {paper.sem}</p>
                  </div>
                  <div className={classes.Logo}>
                    <i className={paper.logo}></i>
                  </div>
                </div>
                <p className={classes.H3}>
                  {paper.sub}{" "}
                  <span
                    className={`${classes.Badge} ${
                      paper.type.toLowerCase() === "est"
                        ? classes.Est
                        : classes.Mst
                    }`}
                  >
                    {paper.type.toUpperCase()}
                  </span>
                </p>
              </div>
            </a>
          );
        })
      ) : (
        <div className={classes.Error}>
          No results found <i className="fas fa-bomb"></i>
        </div>
      )}
    </div>
  );
};

export default Gallery;
