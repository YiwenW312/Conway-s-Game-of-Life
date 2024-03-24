# GitHub Repo Link
https://github.com/YiwenW312/Conway_s_Game_of_Life

# Render App Link
https://yiwen-wang-project2.onrender.com

# Writeup
- With your submission, you must include a write up that touches on the following points.  You may discuss any other ideas that you deem salient to this work.  Each question should be answered with at least a single paragraph (3-5 sentence, but can be more.)

- What were some challenges you faced while making this app?
1. I had a hard time understand the "heatmap" requirement and tried different ways to implement it. 
2. The css could be massed up if the global styles are not treated carefully.
3. Don't know how to start and design the app. 
4. To adujust a beautiful layout style were really difficult. 
5. The Grid has some format/layout/style issues, I spent a lot of time to fix it. 


- Given more time, what additional features, functional or design changes would you make
1. add the bonus "longer lasting cells": this mode sounds fun!
2. add innitial cell design: the random design is too easy to end now
3. let the user pick color: it is fun!
4. add bigger grid

- What assumptions did you make while working on this assignment?
1. I first assumed that the game is at the index page, but it was not, so I have to make changes
2. I assumed that the heatmap was for "how long it lives" so I have to re-do it later for the correct logic.
3. At first I think it would be easy, however, when adding heatmap, everything becomming a little complicated. 

- How long did this assignment take to complete? (Obviously, this does not need to be a paragraph)
- about 30 hours. 

# Bonus credit: AutoPlay - 3 pts

# Bonus credit: Clustered Setup Approach - 2 pts
- The approach for creating a "Clustered Setup" for Conway's Game of Life, as defined in the createClusteredGrid function, involves generating an initial grid where living cells are more likely to be grouped together rather than being randomly distributed. This clustering mimics real-life patterns and can lead to more interesting and dynamic evolutions in the game. 
- The createClusteredGrid function is central to achieving a clustered setup. It aims to populate the grid with living cells in concentrated areas rather than spreading them thinly and evenly across the grid. The parameters rows and cols define the grid's dimensions, clusterCount determines the number of clusters, clusterRadius specifies the radius around each cluster center within which cells can be activated, and chanceOfLife controls the probability of a cell being alive within a cluster.
