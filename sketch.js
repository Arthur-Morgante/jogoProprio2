var indi, indieIMG, indieIMGa, indieIMG_corre, indiIMG_esq, indiIMG_esqp
var aranha, aranhaAni , aranhaIMG1, aranhaIMG2, aranhaIMG3,  aranhaIMGV1, aranhaIMGV2, aranhaIMGV3 
var cenarioIMG,cenarioN2img
var placa
var inimigo
var tutorial
var chaofake
var parede1, parede2, parede3, parede4
var espinhos
var aranhaGroup

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

//INDIE	
	indieIMGa = loadAnimation("personagem/indie1.png", "personagem/indie2.png", "personagem/indie3.png")
	indieIMG = loadImage("personagem/indie1.png")
	indieIMG_corre = loadAnimation("personagem/indie2.png", "personagem/indie3.png")
	indiIMG_esq = loadAnimation("personagem/indie1esq.png", "personagem/indie2esq.png", "personagem/indie3esq.png")
	indiIMG_esqp = loadAnimation("personagem/indie1esq.png")

//CENARIO
	cenarioIMG = loadImage("cenario.png")
	cenarioN2img = loadImage("cenario2.png")

//ESPINHOS	
	espinhos_IMG = loadImage("espinhos.png")

//ARANHA
aranhaIMG1 = loadImage("Aranha/Aranha1.png")
aranhaAni = loadAnimation("Aranha/Aranha1.png", "Aranha/Aranha2.png", "Aranha/Aranha2.png")
aranhaIMG = loadAnimation("Aranha/AranhaV1.png", "Aranha/AranhaV2.png", "Aranha/AranhaV3.png")

}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
indi = createSprite(windowWidth + -1900, windowHeight + -291, 100, 100)
// direita
indi.addAnimation("indip", indieIMG)
indi.addAnimation("indi", indieIMGa)
// esquerda
indi.addAnimation("indi_esqp", indiIMG_esqp)
indi.addAnimation("indi_esq", indiIMG_esq)

//correndo pra direita
indi.addAnimation("indi_corre", indieIMG_corre)

indi.scale = 3

parede1 = createSprite(windowWidth + -1530, windowHeight + -291, 1000, 10)
//parede1.visible = false

parede2 = createSprite(windowWidth + -59, windowHeight + -291, 1306, 10)
//parede2.visible = false
  
espinhos = createSprite(1050, windowHeight - 21, 100, 100)
espinhos.addImage("espinhos", espinhos_IMG)
espinhos.setCollider("rectangle", 200, 300, espinhos.width, espinhos.height)

//Nivel1 = createSprite(windowWidth, windowHeight + -291, 10, 500)

aranhaGroup = createGroup();

aranha = createSprite(windowWidth, windowHeight + -300, 100, 100)
	
	aranha.addAnimation("aranhaC", aranhaAni)
	aranha.addAnimation("aranhaV", aranhaIMG)
	aranha.velocityX = -5

//parede invisivel
paredeAra1 = createSprite(windowWidth - 705, windowHeight - 291, 10, 1000)
paredeAra2 = createSprite(windowWidth, windowHeight - 291, 10, 1000)
}


function draw() {
  rectMode(CENTER);
  background(cenarioIMG);
  //console.log(mouseX, mouseY)
  //console.log(indi.x, indi.y)
   
   //indi movimentação
   if (keyDown ("d") && keyDown("f")) {
	indi.changeAnimation("indi_corre");
	indi.velocityX = +30
   } else if(keyDown ("d")) {
	indi.changeAnimation("indi")
	indi.velocityX = 10
   } else if(keyDown("a")) {
	indi.changeAnimation("indi_esq")
	indi.velocityX = -10
   }else{
	indi.velocityX = 0
	indi.changeAnimation("indip")
   }

   if (aranha.isTouching(paredeAra1)) {
	aranha.changeAnimation("aranhaV")
	aranha.velocityX = 5
   }

   if (aranha.isTouching(paredeAra2)) {
	aranha.changeAnimation("aranhaC")
	aranha.velocityX = -5
   }
   

   if(indi.collide(espinhos)){
	indi.x = 19
	indi.y = 623 
   }

   if (keyDown ("space")) {
	indi.velocityY = -20
   }

   indi.velocityY = indi.velocityY + 2
   

   edges= createEdgeSprites();
   indi.collide(edges[3]);
   indi.collide(parede1)
   indi.collide(parede2)
   
//NIVEL 2
   /*if (indi.collide(Nivel1)) {
	background = background(cenarioN2img)
	espinhos.destroy
   }*/

   espinhos.debug = true
   paredeAra2.debug = true

   //aranhas()

  

  drawSprites();
 
}

function aranhas() {
/*if (frameCount % 10 === 0){
	aranha = createSprite(windowWidth, windowHeight + -300, 100, 100)
	aranha.addAnimation("aranhaC", aranhaAni)
	aranha.velocityX = -5
aranhaGroup.add(aranha);
}*/
}




