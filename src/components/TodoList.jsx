import React from 'react';

const TodoList = () => {
  const todolist = [
    {
      id: 1,
      texte:
        'régler l algo pour avoir le fond bleu clair pour Tweeter et Facebook quand il n ya pas d images',
      difficulté: 'moyen',
      durée: '1 demi journée',
    },
    {
      id: 2,
      texte:
        'sur la page d accueil faire la partie connexion avec les json web tokens',
      difficulté: 'difficile',
      durée: '1 semaine',
    },
    {
      id: 3,
      texte:
        'clean le code, enlever les console log etc...., code qui sert à rien',
      difficulté: 'facile',
      durée: '1 heure',
    },
    {
      id: 4,
      texte:
        'faire un read me pour que le prochain(e) Dev puisse reprendre le projet facilement',
      difficulté: 'facile',
      durée: '1 demi journée',
    },
  ];

  return (
    <div>
      <ul>
        {todolist.map((todo) => (
          <li key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
