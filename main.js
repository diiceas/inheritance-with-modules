import { A } from './classA.js';
import { B } from './classB.js';

const carA = new A();
carA.changeSpeed(30);
carA.move();

const carB = new B("black");
carB.changeSpeed(50);
carB.move();
