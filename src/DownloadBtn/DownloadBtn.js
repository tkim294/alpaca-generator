import React from 'react';
import classes from './DownloadBtn.module.css';

import mergeImages from 'merge-images';
import { useSelector } from 'react-redux';

const DownloadBtn = () => {
    const detailState = useSelector((state) => state.detail);

    const downloadHandler = () => {
        let imageArray = [];
        let prevName = ''
        detailState.forEach((detail) => {
            let name = detail.name;
            let value = detail.value;
            let image_src = require(`../assets/alpaca/${name}/${value}.png`);
            imageArray.push(image_src);
            if(prevName === 'neck') {
                imageArray.push(require('../assets/alpaca/nose.png'));
            }
            prevName = name;
        });

        mergeImages(imageArray)
        .then((b64) => {
            let a = document.createElement('a');
            a.href = b64;
            a.download ="alpaca.png";
            a.click();
        })
    }

    return (
        <button
          className={`${classes.downloadBtn} ${classes.btnDisplay}`}
          onClick={downloadHandler}
        >
          <svg className={classes.randomIcon} stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          Download
        </button>
      );
}

export default DownloadBtn