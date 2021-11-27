export interface QuestionData {
  questionId: number;
  title: string;
  content: string;
  userName: string;
  created: Date;
  answers: AnswerData[];
}

export interface AnswerData {
  answerId: number;
  content: string;
  userName: string;
  created: Date;
}

const wait = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

let questions: QuestionData[] = [
  {
    questionId: 1,
    title: "Why do birds fly?",
    content: "Why is it you think that birds fly?",
    userName: "Artorius",
    created: new Date(2016, 1),
    answers: [
      {
        answerId: 1,
        content: "Birds fly because they want to fly, and for no other reason!",
        userName: "Velvet",
        created: new Date(2016, 1),
      },
    ],
  },
  {
    questionId: 2,
    title: "Do you intend to challenge the king?",
    content: `You may be a great Demon hunter, but I fear you may not be ready.
    The King is defended by the black souls of mighty knights, and a fire-breathing dragon.
    They defeated even myself; that's how I ended up in the dungeon.
    Beware the limits of your own power.`,
    userName: "Biorr",
    created: new Date(2009, 1),
    answers: [],
  },
];

export const getUnansweredQuestions = async (): Promise<QuestionData[]> => {
  await wait(500);
  return questions.filter((q) => q.answers.length === 0);
};
