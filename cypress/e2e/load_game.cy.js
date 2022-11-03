describe('Loading the tictactoe game', () => {
    it('fetchs new game from sinatra api', () => {
        cy.visit('http://localhost:3000/loadgame/XY');
        cy.intercept('http://localhost:4567/loadgame/XY').as(
			'loadGame'
        );
        cy.get('[data-testid="load-game"]').click();
		cy.wait('@loadGame');
        cy.contains('X')
        cy.contains('Y')
        cy.contains('123456789')
    });
});