const myLibOfWords = function () {
	return [
		"PURR", "RIBBIT", "CRISP", "BLUSH", "SIAMESE", "TADPOLE", "JUICY", "RIPE", "TABBY", "LILY", "CORE", "PIT",
		"STEM", "STONE", "BOG", "PEEL", "PICK", "BUSH", "JAM", "SPAWN", "PRESS", "GILLS", "PIE", "BASK", "FUJI", "LEOPARD",
		"SLIME", "SMITH", "JAGUAR", "HONEY", "PUMA", "LADY", "COUGAR", "EMPIRE", "SERVAL", "PINK", "CAKE", "SWIFT",
		"GREEN", "SPLAT", "CLAWS", "PURRS", "HOPPY", "FRUIT", "BERRY", "FELID", "CROAK", "SWEET", "TARTS", "MEOWS",
		"PADS", "SEEDY", "BLOOM", "KITTY", "WARTS", "FLESH", "CHOMP", "LIMBS", "BUGGY", "TWIGS", "BRANCH", "FURRY", "MOIST",
		"CRISP", "SNACK", "PAWS", "MUCKY", "PLUCK", "SQUAT", "FELIX", "TOADS", "SKINS", "CHEWS", "VINES", "LEAPS", "FROGS",
		"APPLE", "MUNCH", "BOGGY", "SAUCE", "JUMPS", "NEWTS", "FRESH", "PIPED", "SPOTS", "SLURP", "BARKS", "SUNNY", "CATTY",
		"WEBBY", "SHINY", "BITE", "LEAFY", "STALK", "GROWL", "PONDS", "TASTE", "FLORA", "PURR", "CROAK", "CRISP", "CHOMP",
		"MEOW", "HOP", "BITE", "JUMP", "PICK", "RIBBIT", "SQUISH", "SPLASH", "TWIG", "BARK", "LEAF", "STEM", "SEED", "ROOT",
		"POND", "MUD", "BUG", "ANT", "BEE", "FLY", "WORM", "MOSS", "FERN", "TREE", "STAR", "SKY", "SUN", "MOON", "CLOUD",
		"RAIN", "WIND", "SNOW", "ICE", "FIRE", "SMOKE", "ASH", "DUST", "SAND", "ROCK", "CLAY", "DIRT"
	];
}

/**
 * BootScene - The first scene to load assets
 **/
class BootScene extends Phaser.Scene {
	preload()
	{
		this.load.audio(
			'laser',
			'https://github.com/Zbeyer/SGame/raw/6332631ef9893dc07ebb4f04b499932628d38a21/assets/laser-shot-ingame-230500.mp3s'
		);
		this.load.image(
			"heartEmpty",
			"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/07586bf8-104f-4874-9186-51da8dc46f6c/dhxpckr-d3c94e0f-f9f0-4571-848b-a6785b5cdeb0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3NTg2YmY4LTEwNGYtNDg3NC05MTg2LTUxZGE4ZGM0NmY2Y1wvZGh4cGNrci1kM2M5NGUwZi1mOWYwLTQ1NzEtODQ4Yi1hNjc4NWI1Y2RlYjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.EyOSIfFeFGUXvLJbEkBA0leESzIkUyyUVBBqiUkJKxs"
		);
		this.load.image(
			"heartFull",
			"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/07586bf8-104f-4874-9186-51da8dc46f6c/dhxpckh-970de5cb-b44a-4bc1-af24-8c4ed31bcb15.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3NTg2YmY4LTEwNGYtNDg3NC05MTg2LTUxZGE4ZGM0NmY2Y1wvZGh4cGNraC05NzBkZTVjYi1iNDRhLTRiYzEtYWYyNC04YzRlZDMxYmNiMTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.FDSqr2snNs_-R_sqS-k_h92hoN2pOZUa_1kL3WEttpg"
		);
		this.load.image(
			"gem",
			"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/07586bf8-104f-4874-9186-51da8dc46f6c/dhdp1az-b959df33-22f0-48f0-8ab5-e05f9dcf07b3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3NTg2YmY4LTEwNGYtNDg3NC05MTg2LTUxZGE4ZGM0NmY2Y1wvZGhkcDFhei1iOTU5ZGYzMy0yMmYwLTQ4ZjAtOGFiNS1lMDVmOWRjZjA3YjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BcAiFsXo2vsjaS_N_FOL480j1wBXQJ0Gmzow2JFW6KQ"
		);
		this.load.image(
			"gemO",
			"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/07586bf8-104f-4874-9186-51da8dc46f6c/dhdp1a9-c2c32058-200f-45f1-b59b-594363a34433.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3NTg2YmY4LTEwNGYtNDg3NC05MTg2LTUxZGE4ZGM0NmY2Y1wvZGhkcDFhOS1jMmMzMjA1OC0yMDBmLTQ1ZjEtYjU5Yi01OTQzNjNhMzQ0MzMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.41AzRO5fttlRBSevfSMn0c1NHQPfExpj-t1jE0TiyA0"
		);
		this.load.image(
			"icon",
			"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/07586bf8-104f-4874-9186-51da8dc46f6c/dhxllx7-0af92a17-0f08-4f97-8bb6-ab5dc4310e78.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3NTg2YmY4LTEwNGYtNDg3NC05MTg2LTUxZGE4ZGM0NmY2Y1wvZGh4bGx4Ny0wYWY5MmExNy0wZjA4LTRmOTctOGJiNi1hYjVkYzQzMTBlNzgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.uqUHadk7y7pzDRZB8aQAZanqYMv85bPoZWTAz86criI"
		);
		this.load.image(
			"spaceP",
			"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/07586bf8-104f-4874-9186-51da8dc46f6c/dhxlm75-efac1bab-fc12-478b-922e-c2ce8ba0a22e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3NTg2YmY4LTEwNGYtNDg3NC05MTg2LTUxZGE4ZGM0NmY2Y1wvZGh4bG03NS1lZmFjMWJhYi1mYzEyLTQ3OGItOTIyZS1jMmNlOGJhMGEyMmUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1RLLrV7hkcTIrY171l-bIbTrQxpRnAJTiLJmyqPY9FA"
		);
		this.load.setBaseURL("https://labs.phaser.io");
		this.load.image("sky", "assets/skies/space3.png");
	}
	create() {
		this.scene.start("Preloader");
	}
}

/**
 * PreloaderScene, the scene to show any loading indicators
 **/
class PreloaderScene extends Phaser.Scene {
	preload() {}

	create() {
		this.scene.stop("Preloader");
		this.scene.start("MainMenuIcon");
	}
}

class MainMenuIcon extends Phaser.Scene {
	create() {
		const text = this.add.text(20, 16, "ZBeyer Interstellar Super Speller", {
			fontFamily: 'Arial',
			fontSize: '32px',
			fontStyle: 'bold',
			align: 'center',
			color: '#FFCC88'})
		text.setText([
			'ZBeyer Interstellar',
			'Super Speller'
		]);
		text.width = this.cameras.main.width;
		text.setOrigin(0, 0);

		const logo = this.add.image(32,96, "icon");
		logo.setOrigin(0, 0);
		const text2 = this.add.text(44, logo.y + logo.height + 16, "Tap Anywhere to continue", { color: '#FFCC55'});
		text2.setOrigin(0, 0);
		const rectangle = this.add.rectangle(0, 0, this.cameras.main.width, this.cameras.main.height, 0x000000);
		rectangle.on('pointerdown', () => {
			this.scene.start('MainMenu');
			this.scene.stop('MainMenuIcon');
		});
		rectangle.setOrigin(0, 0);
		rectangle.setInteractive();
		rectangle.alpha = 0.001; // For some reason if this is zero it is ignored.
	}
}

/**
 * MainMenuScene, the main menu scene
 **/
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

		const x = 16;
		const title = 'Hello World';
		const menuWidth = this.cameras.main.width;
		const text = this.add.text(16, 16, title, { color: '#88DDFF' })
		text.setBlendMode(Phaser.BlendModes.ADD);
		text.scale = 1.0;
		text.setText([
			'ZBeyer Interstellar',
			'Super Speller'
		]);

		let y = 80;
		const buttons = [];
		const options= [
			'New Game',
			// 'Farm',
			// 'Upgrades',
			// 'Credits',
			'Quit',
		];
		const gems = [];
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
			gems.push(gem);
			const text = this.add.text(64, button.y + button.height * 0.25, options[i], {   fontFamily: 'Arial', fontSize: '32px', fontStyle: 'bold', color: '#001133' });
			text.setText(options[i]);
			gem.setOrigin(0, 0);
			gem.setScale(0.5);
		}

		const buttonLength = buttons.length;
		for (let i = 0; i < buttonLength; i++) {
			const button = buttons[i];
			const gem = gems[i];
			// const text = texts[i];
			button.setInteractive();

			button.on('pointerover', () => {
				button.fillColor = 0xDD8855;
				gem.setTexture('gemO');
			});
			button.on('pointerdown', () => {
				button.fillColor = 0xDD8855;
				gem.setTexture('gemO');
			});
			button.on('pointerout', () => {
				button.fillColor = 0x88DDFF;
				gem.setTexture('gem');
			});
		}

		buttons[0].on('pointerdown', () => {
			this.scene.start('MainGame');
			this.scene.stop("MainMenu");
		});

		// buttons[1].on('pointerdown', () => {
		// 	this.scene.start('Farm');
		// this.scene.stop("MainMenu");
		// });

		// buttons[2].on('pointerdown', () => {
		// 	this.scene.start('Upgrades');
		// this.scene.stop("MainMenu");
		// });

		// buttons[3].on('pointerdown', () => {
		// 	this.scene.start('Credits');
		// this.scene.stop("MainMenu");
		// });

		buttons[1].on('pointerdown', () => {
			this.scene.start('Quit');
			this.scene.stop("MainMenu");
		});
	};
}

/**
 * MainGameScene, the main game scene
 **/
class MainGameScene extends Phaser.Scene {
	create() {

		const skybg = this.add.image(0, 0, "sky");
		skybg.setOrigin(0, 0);
		skybg.setScale(
			Math.max(
				this.cameras.main.height / skybg.height,
				this.cameras.main.width / skybg.width
			)
		);

		const heartBG = this.add.rectangle(32, 256, this.cameras.main.width - 64,  32,  0x002211)
		heartBG.setOrigin(0, 0);

		this.hp = 3; // upgradeable

		const stats = this.add.text(296, 16, "", {
			color: '#FFFFFF', // Use a comma here instead of a semicolon
			fontStyle: 'bold',
		})
		stats.setOrigin(0, 0);
		this.myStats = stats;

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

		const height = 64;
		const width = 32;
		let x = 0;
		let y = 0;
		const buttons = [];

		const letters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
		const letters2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
		const letters3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
		const lettersLength = letters.length;
		const letters2Length = letters2.length;
		const letters3Length = letters3.length;

		for (let i = 0; i < lettersLength; i++) {
			x = i % 10;
			y = this.cameras.main.height - (64 * 3.0);

			const rectangle = this.add.rectangle(x * width, y, width, height, 0x88FFDD);
			const rectangleBg = this.add.rectangle(rectangle.x + 1, rectangle.y + 1, width - 2, height - 2, 0x000000);
			rectangleBg.setOrigin(0, 0);
			rectangle.setOrigin(0, 0);
			rectangle.setInteractive();
			const text = this.add.text(rectangleBg.x + 2, rectangleBg.y + 2, letters[i], { fontFamily: 'Courier, monospace', fontSize: '32px', fontStyle: 'bold', color: '#88FFDD' });
			text.width = rectangle.width;
			text.x = rectangle.x;
			text.setAlign('center');
			buttons.push({rect: rectangle, letter: letters[i]});
			Phaser.Display.Align.In.Center(text, rectangle);
		}

		for (let i = 0; i < letters2Length; i++) {
			x = i % 9;
			y = this.cameras.main.height - (64 * 2.0);
			const rectangle = this.add.rectangle(x * width + 16, y, width, height, 0x88FFDD);
			const rectangleBg = this.add.rectangle(rectangle.x + 1, rectangle.y + 1, width - 2, height - 2, 0x000000);
			rectangleBg.setOrigin(0, 0);
			rectangle.setOrigin(0, 0);
			rectangle.setInteractive();
			const text = this.add.text(rectangleBg.x + 2, rectangleBg.y + 2, letters2[i], { fontFamily: 'Courier, monospace', textAlign: 'center',fontSize: '32px', fontStyle: 'bold', color: '#88FFDD' });
			text.width = rectangle.width;
			text.x = rectangle.x;
			text.setAlign('center');
			buttons.push({rect: rectangle, letter: letters2[i]});
			Phaser.Display.Align.In.Center(text, rectangle);
		}

		for (let i = 0; i < letters3Length; i++) {
			x = i % 7;
			y = this.cameras.main.height - (64 * 1.0);
			const rectangle = this.add.rectangle(x * width + 52, y, width, height, 0x88FFDD);
			const rectangleBg = this.add.rectangle(rectangle.x + 1, rectangle.y + 1, width - 2, height - 2, 0x000000);
			rectangleBg.setOrigin(0, 0);
			rectangle.setOrigin(0, 0);
			rectangle.setInteractive();
			const text = this.add.text(rectangleBg.x + 2, rectangleBg.y + 2, letters3[i], { fontFamily: 'Courier, monospace', fontSize: '32px', fontStyle: 'bold', color: '#88FFDD' });
			text.width = rectangle.width;
			text.x = rectangle.x;
			text.setAlign('center');
			buttons.push({rect: rectangle, letter: letters3[i]});
			Phaser.Display.Align.In.Center(text, rectangle);
		}

		buttons.forEach((data) => {
			data.rect.on('pointerdown', () => {
				const newKey = data.letter.toUpperCase();
				newLetter(newKey, this);
				fireLetter(newKey, this);
			});
		});

		const scene = this;
		const libOfWords = myLibOfWords();
		const speed = 1.0; // upgradeable
		const myData = [];
		let frames = 0;
		setInterval (function () {
			frames++;
			const text = scene.text;
			if (text.alpha > 0) {
				text.alpha -= 0.005;
			}

			const dataLength = myData.length;
			for (let i = 0; i < dataLength; i++)
			{
				const d = myData[i];
				const image = d.image;
				image.y += speed;
				const text = d.text
				text.y += speed;
			}

			for (let i = 0; i < dataLength; i++)
			{
				const d = myData[i];
				if (d.image.y >= 128)
				{
					if (d.name)
					{
						let hp = scene.hp;
						hp = hp - 1;
						scene.hp = hp;
					}
					d.image.destroy();
					d.name = null;
					d.text.destroy();
				}
			}

			if (frames % 160 !== 0) return;

			const name = libOfWords[Math.floor(Math.random() * libOfWords.length)];
			const data = newTarget(scene, name);
			myData.push(data);

	}, 16.0)}; // Approx. 120 updates per second

	update(time, delta) {
		const stats = this.myStats;
		stats.setText([
			this.hp
		])

		if (this.hp < 0)
		{
			// Go to game over scene
			// this.scene.start ("")
			this.scene.start ("GameOverScene");
			this.scene.stop('MainGame');
		}
	}
}

/**
 * QuitScene, the scene to quit the game
 */
class QuitScene extends Phaser.Scene {
	create() {
		this.game.destroy(true);
	}
}

/**
 * GameOverScene, a scene to show the score
 */
class GameOverScene extends Phaser.Scene {
	create() {
		const skybg = this.add.image(0, 0, "sky");
		skybg.setOrigin(0, 0);
		skybg.setScale(
			Math.max(
				this.cameras.main.height / skybg.height,
				this.cameras.main.width / skybg.width
			)
		);
		const gameOverText = this.add.text(16, 16, "Game Over", {
			fontFamily: 'Arial', fontSize: '32px', fontStyle: 'bold', color: '#5588DD'
		});
		const button = this.add.rectangle(16, 64, this.cameras.main.width - 32, 64, 0x005588);
		button.setOrigin(0, 0);
		const gem = this.add.image(32, 80, 'gem');
		gem.setScale( 0.5);
		gem.setOrigin(0, 0);
		const buttonText = this.add.text(gem.x + gem.width, button.y + button.height * 0.25, "Main Menu", {
			fontFamily: 'Arial', fontSize: '32px', fontStyle: 'bold', color: '#001133'
		});
		buttonText.setOrigin(0, 0);
		button.setInteractive();
		button.on('pointerover', () => {
			button.fillColor = 0xDD8855;
			gem.setTexture('gemO');
		});
		button.on('pointerdown', () => {
			button.fillColor = 0xDD8855;
			gem.setTexture('gemO');
			this.scene.stop('GameOverScene');
			this.scene.start('MainMenu');
		});
		button.on('pointerout', () => {
			button.fillColor = 0x88DDFF;
			gem.setTexture('gem');
		});
	}
}

const newLetter = function (letter, scene) {
	const text = scene.text;
	text.alpha = 1.0;
	text.setText(letter);
}

const fireLetter = function (letter, scene) {
	const laserSound = scene.sound.add('laser');
	laserSound.play();
}

const newTarget = function (scene, name) {
	/*
	 * 2. If they hit the bottom, remove a heart
	 * 3. Type the word to removes the object from the game
	 *
	 * Game Over when all hearts are gone
	 * Score is the number of letters typed
	 * Farm the letters
	 * Upgrade to get more hearts
	 */
	const image = scene.add.image(8 + Math.floor(Math.random() * 96), 0, "spaceP");
	image.setOrigin(0, 0);
	image.setScale(0.80);
	image.y = -image.height;
	const text = scene.add.text(image.x, image.y + 40, name, {
		fontFamily: 'Arial',
		fontSize: '32px',
		fontStyle: 'bold',
		align: 'center',
		color: '#FFDDDD',
		stroke: '#221100', // Stroke color
		strokeThickness: 8 // Stroke thickness
	});
	const characterCount = text.text.length;
	let newX;
	switch (characterCount) {
		case 3:
			newX = image.x + 22 * characterCount;
			break;
		case 4:
			newX = image.x + 14 * characterCount;
			break;
		case 5:
			newX = image.x + 9 * characterCount;
			break;
		case 6:
			newX = image.x + 5 * characterCount;
			break;
		default:
			newX = image.x + 3 * characterCount;
			break;
	}
	text.x = newX;
	return {
		image: image,
		name: name,
		text: text
	};
}

const newKeyboard = function (scene) {
	function newKeyvent(e) {
		const text = scene.text;
		text.setText(e.key.toUpperCase());
		const newKey = e.key.toUpperCase();
		newLetter(newKey, scene);
		fireLetter(newKey, scene);
	}

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

/**
 * Save to local storage
 * @param key
 * @param value
 **/
const save = function (key, value) {
	key = key || "";
	value = value || 0;
	localStorage.setItem(key, value);
}

/**
 * Load from local storage
 * @param key
 * @returns {string|string}
 **/
const load = function (key) {
	const value = localStorage.getItem(key) || "";
	return value;
}

/**
 * Make a new game configuration
 * @returns {{parent: string, physics: {default: string, arcade: {gravity: {y: number}}}, scale: {mode: Phaser.Scale.ScaleModes.FIT, width: number, height: number}, type: number, render: {pixelArt: boolean}}}
 **/

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
			height: 480,
			width: 320
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

/**
 * Start a new game
 * @returns {Phaser.Game}
 * **/
const newGame = function () {
	const config = makeNewConfig();
	const game = new Phaser.Game(config);
	game.scene.add("Boot", BootScene);
	game.scene.add("Preloader", PreloaderScene);
	game.scene.add("MainMenuIcon", MainMenuIcon);

	game.scene.add("Quit", QuitScene);
	game.scene.add("MainMenu", MainMenuScene);
	game.scene.add("MainGame", MainGameScene);
	game.scene.add("GameOverScene", GameOverScene);

	game.scene.start("Boot");
	return game;
};

// Start the game
newGame();
