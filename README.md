Noughts & Crosses Tech Test!
===========================

The brief
---------

The rules of tic-tac-toe are as follows:

- There are two players in the game (X and O)
- Players take turns until the game is over
- A player can claim a field if it is not already taken
- A turn ends when a player claims a field
- A player wins if they claim all the fields in a row, column or diagonal
- A game is over if a player wins
- A game is over when all fields are taken

Build the business logic for a game of tic tac toe. It should be easy to implement a working game of tic tac toe by combining your code with any user interface, whether web or command line.

User Stories
-----------
```
As a hardcore gamer,
so I can play a game a game,
I want to choose my icon.

As a hardcore gamer,
so I can play a game of noughts and crosses,
I want to access a grid

As a hardcore gamer,
so I can take a turn,
I want to choose a square on the grid.

As a hardcore gamer,
so may opponent can take a turn,
I want them to select a square on the grid.

As a hardcore gamer,
so I can win a game,
I want the game to end when I get 3 in a row.

As a hardcore gamer,
so I can lose,
I want the game to end if my opponent gets 3 in a row.

As a hardcore gamer,
so I can draw,
I want the game to finish when all spaces are taken.

As a hardcore gamer,
so I can see what I'm doing,
I want the game to have a nice display.
```

Getting Started
---------------
```
-$ git clone git@github.com:mikefieldmay/tech_test_noughts_and_crosses.git
-$ cd tech_test_noughts_and_crosses
-$ open SpecRunner.html
```

Challenges
---------
Whilst initially seeming quite simple, game logic can quickly become very complex. It's always interesting to design games in an object oriented way.

Future improvements
---------------
Currently all the logic exists for my noughts and crosses game. It now needs an interface and jquery in order to be fully functional, but having worked out the logic I feel this isn't too difficult.

Built With
---------

- javascript
- Jasmine 2.5.2

Authors
-------
Mike Field-May
