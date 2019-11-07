DROP DATABASE IF EXISTS usergames;
CREATE DATABASE usergames;
USE usergames;
CREATE TABLE usergames_current (
id INT AUTO_INCREMENT PRIMARY KEY,
game VARCHAR(255) NOT NULL,
platform VARCHAR(255) NOT NULL,
review INTEGER(5) NOT NULL,
game_release DATE NOT NULL,
company VARCHAR(255) NOT NULL,
genre VARCHAR(255),
game_character VARCHAR(255)
);
INSERT INTO usergames_current (id, game, platform, review, game_release, company, genre, game_character)
VALUES (12345, "Tetris", "Nintendo", 5, "1990-01-01", "Nintendo", "strategy", "N/A");
INSERT INTO usergames_current (id, game, platform, review, game_release, company, genre, game_character)
VALUES (54321, "Madden 05", "XBox, Play Station, PC", 4, "2005-08-15", "EA Sports", "Sports", "NFL");