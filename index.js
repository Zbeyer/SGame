const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

// Add these lines to enable live reloading during development
if (process.env.NODE_ENV === 'development') {
	require('electron-reload')(__dirname, {
		electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
		hardResetMethod: 'exit',
	});
}

// Add this line to fix an issue with Phaser loading resources in Electron
app.allowRendererProcessReuse = true;

let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 320,
		height: 480,
		webPreferences: {
			nodeIntegration: true,
		},
	});

	mainWindow.loadFile('index.html');

	mainWindow.on('closed', function () {
		mainWindow = null;
	});
}

app.whenReady().then(createWindow);

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
	if (mainWindow === null) createWindow();
});

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		contentBase: path.join(__dirname, 'src'),
		port: 3000,
		open: true,
	},
};