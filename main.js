// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')

require('electron-reload')(__dirname);
// require electron reload 
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var bcrypt = require('bcrypt');
const windowStateKeeper = require('electron-window-state');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
app.setBadgeCount(98);

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
  console.log("hashed password "+ hash);
});

let mainWindow


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.


app.on('ready', function(e) {
  // Create the browser window.
  
  mainWindow = new BrowserWindow({width: 1400, height: 600, backgroundColor : '#f00f00', frame: true, minWidth: 500, minHeight: 500});
  // childWindow = new BrowserWindow({width: 600, height: 400, backgroundColor : '#ffffff', parent: mainWindow, modal: true, show: false});
  
  // and load the index.html of the app.
  mainWindow.loadFile('index.html');

  mainWindow.on('focus',function(){
    console.log('on focus');
  })
  // childWindow.loadURL('https://electronjs.org/docs/all');
  
  // mainWindow.once('ready-to-show', function(){
  //   mainWindow.show();
  // })

  // childWindow.once('ready-to-show',function(){
  //   childWindow.show();
  // });

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
  // childWindow.on('closed', function () {
  //   // Dereference the window object, usually you would store windows
  //   // in an array if your app supports multi windows, this is the time
  //   // when you should delete the corresponding element.
  //   mainWindow = null
  // })
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
