// Modules to control application life and create native browser window
// import defaultExport from "components";
const {app, BrowserWindow, Menu} = require('electron')
const path = require('path')

function createWindow () {
  // Create the browser window.
  let mainWindow = new BrowserWindow({
    width: 900,
    height: 600,
    frame: false,
    minimizable: true,
    // menuBarVisible: true,
    // titleBarStyle: 'hidden',
    
    webPreferences: {
      nodeIntegration: true,
      
      preload: path.join(__dirname, 'preload.js')
    }
    
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html');

  mainWindow.on('closed', ()=>{
    mainWindow = null;
  })
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }

 
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
  


// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
app.on('minimize', () => {
  win.isMinimized() ? win.restore() : win.minimize()
  // or alternatively: win.isVisible() ? win.hide() : win.show()
})