import { Fragment } from 'react';
import AlpacaPreview from './AlpacaPreview/AlpacaPreview';
import classes from './App.module.css';
import ButtonControls from './ButtonControls/ButtonControls';
import Randomize from './Randomize/Randomize';
import DownloadBtn from './DownloadBtn/DownloadBtn';

function App() {
  return (
    <Fragment>
      <h1>Alpaca Generator</h1>
      <div className={classes.container}>
        <div className={classes.alpacaPreviewContainer}>
          <AlpacaPreview />
          <div className={classes.btnGroup}>
            <DownloadBtn />
            <Randomize />
          </div>
        </div>
        <ButtonControls />
      </div>
    </Fragment>
  );
}

export default App;
