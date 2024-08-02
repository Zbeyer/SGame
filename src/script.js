// import Phaser from "phaser";

class BootScene extends Phaser.Scene {
	// You can define the optional methods init(), preload(), and create().
	preload() {
		this.load.image(
			"gem",
			"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/07586bf8-104f-4874-9186-51da8dc46f6c/dhdp1az-b959df33-22f0-48f0-8ab5-e05f9dcf07b3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3NTg2YmY4LTEwNGYtNDg3NC05MTg2LTUxZGE4ZGM0NmY2Y1wvZGhkcDFhei1iOTU5ZGYzMy0yMmYwLTQ4ZjAtOGFiNS1lMDVmOWRjZjA3YjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BcAiFsXo2vsjaS_N_FOL480j1wBXQJ0Gmzow2JFW6KQ"
		);
		this.load.setBaseURL("https://labs.phaser.io");
		this.load.image("sky", "assets/skies/space3.png");
	}
	create() {
		this.scene.start("Preloader");
	}
}

class PreloaderScene extends Phaser.Scene {
	preload() {}

	create() {
		this.scene.stop("Preloader");
		this.scene.start("MainMenu");
	}
}

class MainMenuScene extends Phaser.Scene  {
	create() {

		const skybg = this.add.image(0, 0, "sky");
		skybg.setOrigin(0, 0);
		skybg.setScale(
			Math.max(
				this.cameras.main.height / skybg.height,
				this.cameras.main.width / skybg.width
			)
		);
		const title = 'Hello World';
		const menuWidth = this.cameras.main.width;
		const menuHeight = this.cameras.main.height;
		const text = this.add.text(16, 16, title, { color: '#88DDFF' })
		text.setBlendMode(Phaser.BlendModes.ADD);
		text.scale = 1.0;
		text.setText([
			'Spelling',
			'Game'
		]);
		this.createButtons(menuWidth, menuHeight);
	};

	createButtons(menuWidth, menuHeight) {
		const x = 16;
		let y = 80;
		const buttons = [];

		const options= [
			'New Game',
			'Farm',
			'Upgrades',
			'Credits',
			'Quit',
		];

		const numButtons = options.length;

		for (let i = 0; i < numButtons; i++) {
			y = 72 * i;
			y += 64;
			const rectangle = this.add.rectangle(x, y, menuWidth - x * 2, 64, 0x88DDFF);
			rectangle.setOrigin(0, 0);
			buttons.push(rectangle);
		}

		for (let i = 0; i < numButtons; i++)
		{
			const button = buttons[i];
			const gem = this.add.image(24, button.y + button.height * 0.25, 'gem');
			const text = this.add.text(64, button.y + button.height * 0.25, options[i], {   fontFamily: 'Arial', fontSize: '32px', fontStyle: 'bold', color: '#003355' });
			text.setText(options[i]);

			gem.setOrigin(0, 0);
			gem.setScale(0.5);
			button.setInteractive();
		}
	};
}
class MainGameScene extends Phaser.Scene {
	preload() {}

	create() {
		const skybg = this.add.image(0, 0, "sky");
		skybg.setOrigin(0, 0);
		skybg.setScale(
			Math.max(
				this.cameras.main.height / skybg.height,
				this.cameras.main.width / skybg.width
			)
		);
		const logo = this.physics.add.image(400, 100, "gem");
		logo.setVelocity(200, 300);
		logo.setBounce(1, 1);
		logo.setCollideWorldBounds(true);

		newKeyboard(this);

		// Create a text object to display the input
		const text = (this.inputText = this.add.text(16, 16, "", {
			font: "24px Courier",
			fill: "#FFDD88"
		}));
		text.height = 32;
		text.width = 32;
		text.setOrigin(0, 0);
		this.text = text;
	}
	update() {
		const text = this.text;
		if (text.alpha > 0) {
			text.alpha -= 0.01;
		}
	}
}

class QuitScene extends Phaser.Scene {
	create() {
		this.game.destroy(true);
	}
}

const newKeyboard = function (scene) {
	/**
	On screen keyb0ard
	AA >= 24
	AAA >= 44
	I think the only way forward is 32x64
	Tall buttons but not wide.
	
	Q W E R T Y U I O P 
	 A S D F G H J K L
	   Z X C V B N M
	   
	**/
	function newKeyvent(e) {
		const text = scene.text;

		text.alpha = 1.0;
		text.setText("SPACE");

		if (!(e && e.key)) return;

		text.setText(e.key.toUpperCase());
		const newKey = e.key.toLowerCase();
	}
	const spaceBar = scene.input.keyboard.addKey(
		Phaser.Input.Keyboard.KeyCodes.SPACE
	);

	// Listen for the keydown event
	spaceBar.on("down", function (event) {
		newKeyvent(event);
	});

	scene.input.keyboard.on("keydown-A", function (event) {
		newKeyvent(event);
	});
	scene.input.keyboard.on("keydown-B", function (event) {
		newKeyvent(event);
	});
	scene.input.keyboard.on("keydown-C", function (event) {
		newKeyvent(event);
	});
	scene.input.keyboard.on("keydown-D", function (event) {
		newKeyvent(event);
	});
	scene.input.keyboard.on("keydown-E", function (event) {
		newKeyvent(event);
	});
	scene.input.keyboard.on("keydown-F", function (event) {
		newKeyvent(event);
	});
	scene.input.keyboard.on("keydown-G", function (event) {
		newKeyvent(event);
	});
	scene.input.keyboard.on("keydown-H", function (event) {
		newKeyvent(event);
	});
	scene.input.keyboard.on("keydown-I", function (event) {
		newKeyvent(event);
	});
	scene.input.keyboard.on("keydown-J", function (event) {
		newKeyvent(event);
	});
	scene.input.keyboard.on("keydown-K", function (event) {
		newKeyvent(event);
	});
	scene.input.keyboard.on("keydown-L", function (event) {
		newKeyvent(event);
	});
	scene.input.keyboard.on("keydown-M", function (event) {
		newKeyvent(event);
	});
	scene.input.keyboard.on("keydown-N", function (event) {
		newKeyvent(event);
	});
	scene.input.keyboard.on("keydown-O", function (event) {
		newKeyvent(event);
	});
	scene.input.keyboard.on("keydown-P", function (event) {
		newKeyvent(event);
	});
	scene.input.keyboard.on("keydown-Q", function (event) {
		newKeyvent(event);
	});
	scene.input.keyboard.on("keydown-R", function (event) {
		newKeyvent(event);
	});
	scene.input.keyboard.on("keydown-S", function (event) {
		newKeyvent(event);
	});
	scene.input.keyboard.on("keydown-T", function (event) {
		newKeyvent(event);
	});
	scene.input.keyboard.on("keydown-U", function (event) {
		newKeyvent(event);
	});
	scene.input.keyboard.on("keydown-V", function (event) {
		newKeyvent(event);
	});
	scene.input.keyboard.on("keydown-W", function (event) {
		newKeyvent(event);
	});
	scene.input.keyboard.on("keydown-X", function (event) {
		newKeyvent(event);
	});
	scene.input.keyboard.on("keydown-Y", function (event) {
		newKeyvent(event);
	});
	scene.input.keyboard.on("keydown-Z", function (event) {
		newKeyvent(event);
	});
};

const makeNewConfig = function () {
	const config = {
		type: Phaser.AUTO,
		parent: "game-container",
		render: {
			pixelArt: true
		},
		scale: {
			mode: Phaser.Scale.ScaleModes.FIT,
			// 512 x 768
			// 576 x 1024
			height: 520,
			width: 360
		},
		physics: {
			default: "arcade",
			arcade: {
				gravity: { y: 200 }
			}
		}
	};
	return config;
};

const newGame = function () {
	const config = makeNewConfig();
	const game = new Phaser.Game(config);
	game.scene.add("Boot", BootScene);
	game.scene.add("Preloader", PreloaderScene);
	game.scene.add("Quit", QuitScene);
	game.scene.add("MainMenu", MainMenuScene);
	game.scene.add("MainGame", MainGameScene);

	game.scene.start("Boot");
	return game;
};

newGame();
