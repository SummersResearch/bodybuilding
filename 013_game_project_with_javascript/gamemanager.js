let Gamemanager = {
    setGameStart: function (classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function (classType) {
        switch (classType) {
            case "Warrior":
                player = new Player(classType, 200, 0, 200, 100, 50);
                break;
            case "Goblin":
                player = new Player(classType, 100, 0, 100, 140, 200);
                break;
            case "Knight":
                player = new Player(classType, 80, 0, 200, 300, 70);
                break;
            case "Solider":
                player = new Player(classType, 400, 0, 50, 100, 200);
                break;

        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="solider.jpg' + classType.toLowerCase() + '.jpg" class="img-avatar" <div><h3>' + classType +
            '</h3><p class="health-player">Health: ' + player.health + '</p><p>Mana: ' + player.mana + '</p>' +
            '<p>Strength: ' + player.strength + '</p><p>Agility: ' + player.agility + '</p>' +
            '<p>Speed: ' + player.health + '</p>';
    },
    setPreFight: function () {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="Gamemanager.setFight()">Search for enemy!</a>';
        getArena.style.visibility = "visible";

    },
    setFight: function () {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        // Create enemy!
        let enemy00 = new Enemy("Avatar", 100, 0, 75, 77, 80);
        let enemy01 = new Enemy("Troll", 50, 0, 75, 77, 80);
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;
        }
        getHeader.innerHTML = '<p>Task: Choose your move!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
        //     getEnemy.innerHTML =  <div><h3>' + classType +
        //         '</h3><p>Health: '+ player.health + '</p><p>Mana: '+ player.mana + '</p>' +
        //         '<p>Strength: '+ player.strength + '</p><p>Agility: '+ player.agility + '</p>' +
        //         '<p>Speed: '+ player.health + '</p></div>';
        //
    },
}
