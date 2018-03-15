import { Question } from './question';

export const QUESTIONS: Question[] = [
    {
    index: 1, 
    title: "Which is an even prime number?",
    choices: ["1", "2", "3", "4"],
    answer: "2",
    userChoice: ""
  }, {
    index: 2, 
    title: "Who am I?",
    choices: ["You", "Me", "Jackie Chan", "King of the world"],
    answer: "Me",
    userChoice: ""
  }, {
    index: 3, 
    title: "Which one came first?",
    choices: ["Egg", "Chicken", "Both", "Hypothetical"],
    answer: "Egg",
    userChoice: ""
  }, {
    index: 4, 
    title: "What happened to angular 3?",
    choices: ["React hijacked it", "Skipped", "Released", "Blocked"],
    answer: "Skipped",
    userChoice: ""
  }];
