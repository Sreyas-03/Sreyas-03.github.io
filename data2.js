let data;

(function () {
  const about = {
    typing: [
    ],
    resume: [
    ],
    about: [
    ],
  };

  const projects = [
    {
      name: 'Qunatum Chess',
      image: './img/QuantumChess.png',
      about:
        'When the best game ever meets qunatum physics',
      code: 'https://github.com/Sreyas-03/Quantum_Chess',
    },
    {
      name: 'Battle Snake',
      image: './img/BattleSnake.png',
      about:
        'Controlling the snake to battle it out to victory in the Classic "Snake Game"',
        code: 'https://github.com/Sreyas-03/Accident_BattleSnake.git',
    },
    {
      name: 'Stroke Rehab',
      image: './img/StrokeRehab.png',
      about:
        'A deployable solution for Neuro Rehabilitation of post-stroke patients',
      code: 'https://github.com/Sreyas-03/ESW-project',
    },
    {
      name: 'C-Shell',
      image: './img/C_Shell.png',
      about:
        'Bash-like command interpreter, written in C, with support for process management, piping/redirection, background processes and built-in as well as system commands',
      code: 'https://github.com/Sreyas-03/shhhhell',
    },
    {
      name: 'Advanced xv6',
      image: './img/xv6.png',
      about:
        'Improved xv6 with new scheduling techniques, system calls, user programs and Copy-on-write Fork.',
      code: 'https://github.com/Sreyas-03/Enhanced_XV6',
    },
  ];

  data = { about, projects };
})();
