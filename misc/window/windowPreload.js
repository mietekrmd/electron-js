import { contextBridge } from 'electron';
import titlebarContext from './titlebarContext.js';

contextBridge.exposeInMainWorld('electron_window', {
  titlebar: titlebarContext,
});
