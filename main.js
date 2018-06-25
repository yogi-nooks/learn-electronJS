// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')

// require electron reload 
require('electron-reload')(__dirname);
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
  console.log("hashed password "+ hash);
});

let mainWindow


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

app.on('ready', function(e) {
  // Create the browser window.
  console.log(e);
  mainWindow = new BrowserWindow({width: 1400, height: 600})
  
  console.log('app is ready');
  // and load the index.html of the app.
  mainWindow.loadFile('index.html')
  

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
})

//Before quit 

app.on('will-finish-launching', function(){
  console.log(10+90);
});
console.log(app.getPath('desktop'));

// Quit when all windows are closed.
app.on('window-all-closed', function () {

  console.log('we just closed');
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
