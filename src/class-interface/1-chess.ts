export {}

// file 체스판 x축, rank 체스판 y축
type Color = 'Black' | 'White';
type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

// 체스게임
class Game {
    private pieces = Game.makePieces()
    private static makePieces() {
        return [
            //Kings
            new King('White', 'E', 1),
            new King('Black', 'E', 8),
            //Queens
            new Queen('White', 'D', 1),
            new Queen('Black', 'D', 8)
            // ..
        ]
    }
};
// 체스 말
abstract class Piece {
    protected position: Position;
    constructor(
        private readonly color: Color,
        file: File,
        rank: Rank
    ) {
        this.position = new Position(file, rank);
    }
    moveTo(position: Position) {
        this.position = position;
    };
    abstract canMoveTo(position: Position) : boolean;
};
// 체스 말 좌표
 class Position {
    constructor (
        private file: File,
        private rank: Rank
    ) {}
    distanceFrom(position: Position) {
        return {
            rank: Math.abs(position.rank - this.rank),
            file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
        };
    };
};

class King extends Piece {
    canMoveTo(position: Position) {
        let distance = this.position.distanceFrom(position);
        return distance.rank < 2 && distance.file < 2;
    };
};
class Queen extends Piece {
    canMoveTo(position: Position) {
        let distance = this.position.distanceFrom(position);
        return distance.rank < 2 && distance.file < 2;
    };
}
// class Bishop extends Piece {}
// class Knight extends Piece {}
// class Rook extends Piece {}
// class Pawn extends Piece {}

