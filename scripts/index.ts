class GameEngine{
    public screenCanvas: HTMLCanvasElement;
    public screenCanvasContext: CanvasRenderingContext2D;
    public gameState: GameState;

    constructor() {
        this.screenCanvas = <HTMLCanvasElement>document.getElementById('screen');
        this.screenCanvas.style.backgroundColor = "#000000";
        this.screenCanvasContext = this.screenCanvas.getContext('2d');
    }    
}

enum GameState {
    Title,
    IntroScreen,
    Map,
    Newspaper
}

function SetUpTitle(gameObject: GameEngine){
    this.titleImage = new Image();
    this.titleImage.src = "images/globetitle.jpg";
    
    this.titleImage.onload = ()=> {
        gameObject.screenCanvasContext.drawImage(this.titleImage, 0, 25, 800, 680);
        gameObject.screenCanvasContext.font = '28px sematarymedium';
        gameObject.screenCanvasContext.fillStyle = 'black';
        gameObject.screenCanvasContext.fillText('Press Space to start', 242, 350);    
    }
    gameObject.gameState = GameState.Title;
}

function InitStartGameScreen(gameObject: GameEngine){
    gameObject.screenCanvas.hidden = true;
    location.href = `file://${__dirname}/introscreen.html`

    
    gameObject.gameState = GameState.IntroScreen;

    
}

function keyBoardInput(event: KeyboardEvent, gameEngineObject: GameEngine){
    if(event.keyCode == 32){
        if(gameEngineObject.gameState == GameState.Title){
            InitStartGameScreen(gameEngineObject);
            
        }
        
    }
    if(event.keyCode == 8){
        SetUpTitle(gameEngineObject);
    }
}

window.onload = ()=> {
    var gameEngineObject = new GameEngine();
    var fontHack = document.getElementById('font-hack');
    document.addEventListener('keydown', (e)=> {keyBoardInput(e, gameEngineObject)});
    SetUpTitle(gameEngineObject);
    fontHack.style.display = 'none'

}

