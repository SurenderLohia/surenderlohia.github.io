---
layout: post
title: Tic-tac-toe | Python | Program | Surender Lohia
main-title: Tic-tac-toe - Python
date: 2020-08-04 14:21:05 +0530
author: Surender Lohia
categories: python
active: blog
description: Tic-tac-toe, noughts and crosses, or Xs and Os is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.
# image: /assets/images/posts/name
comments: true
main-js: true
---

Tic-tac-toe, noughts and crosses, or Xs and Os is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.

Tic-tac-toe game in Terminal using Python

<pre>
  <code class="language-js">
    # tic-tac-toe.py
    import itertools


    def win(current_game):
        def all_same(l):
            if l.count(l[0]) == len(l) and l[0] != 0:
                return True
            else:
                return False

        # horizontal winner
        for row in game:
            if all_same(row):
                print(f"player {row[0]} is the winner horizontally!")
                return True

        # vertical winner
        for col in range(len(game)):
            check = []
            for row in game:
                check.append(row[col])

            if all_same(check):
                print(f"player {check[0]} is the winner vertically (|)!")
                return True

        # diagonal winner
        diags = []
        for row, col in enumerate(reversed(range(len(game)))):
            diags.append(game[row][col])
        if all_same(diags):
            print(f"player {diags[0]} is the winner diagonally (/)!")
            return True

        diags = []
        for ix in range(len(game)):
            diags.append(game[ix][ix])
        if all_same(diags):
            print(f"player {diags[0]} is the winner diagonally (\\)!")
            return True

        return False


    def game_board(game_map, player=0, row=0, column=0, just_display=False):
        try:
            if game_map[row][column] != 0:
                print('This position is occupado! Choose another!')
                return game_map, False
            #print('   0  1  2')
            print('   ' + '  '.join([str(i) for i in range(len(game_map))]))
            if not just_display:
                game_map[row][column] = player
            for (count, row) in enumerate(game_map):
                print(count, row)
            return game_map, True

        except IndexError as e:
            print('Error: Make sure you input row/column 0, 1, or 2?',  e)
            return game_map, False
        except Exception as e:
            print('Something went realy wrong!', e)
            return game_map, False


    play = True
    while play:
        game = []

        game_size = int(input('What size of tic tac toe? '))
        for i in range(game_size):
            row = []
            for j in range(game_size):
                row.append(0)
            game.append(row)

        player_choice = itertools.cycle([1, 2])
        game_won = False
        game, _ = game_board(game, just_display=True)
        while not game_won:
            current_player = next(player_choice)
            print(f'current_player: {current_player}')
            played = False

            while not played:
                row_choice = int(
                    input('What a row do you want to play? (0, 1, 2): '))
                column_choice = int(
                    input('What a column do you want to play? (0, 1, 2): '))
                game, played = game_board(
                    game, current_player, row_choice, column_choice)

                if win(game):
                    game_won = True
                    again = input(
                        'The game is over would you like to play again? (y/n) ')
                    if again.lower() == 'y':
                        print('Restarting...')
                    elif again.lower() == 'n':
                        print('Byeee...')
                        play = False
                    else:
                        print('Not a valid answer, so... c u l8r...')
                        play = False

  </code>
</pre>

[Detailed Tutorial Here](https://www.youtube.com/watch?v=tf3ezjeTpfI)
