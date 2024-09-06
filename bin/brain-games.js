#!/usr/bin/env node
import { helloUser, name } from "../src/cli.js";
import {isEvenGame} from "./brain-even.js";

console.log('Welcome to the Brain Games!')
helloUser();
isEvenGame(name);
