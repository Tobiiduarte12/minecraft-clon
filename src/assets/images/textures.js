import { 
    grassImg,
    dirtImg,
    woodImg,
    logImg,
    glassImg
 } from "./images.js";
import { NearestFilter, RepeatWrapping, TextureLoader } from "three";

const groundTexture = new TextureLoader().load(grassImg)

const grassTexture = new TextureLoader().load(grassImg)
const dirtTexture = new TextureLoader().load(dirtImg)
const woodTexture = new TextureLoader().load(woodImg)
const logTexture = new TextureLoader().load(logImg)
const glassTexture = new TextureLoader().load(glassImg)

groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping

grassTexture.magFilter = NearestFilter
dirtTexture.magFilter = NearestFilter
woodTexture.magFilter = NearestFilter
logTexture.magFilter = NearestFilter
glassTexture.magFilter = NearestFilter


export { 
    groundTexture,
    grassTexture,
    dirtTexture,
    woodTexture,
    logTexture,
    glassTexture
 }


