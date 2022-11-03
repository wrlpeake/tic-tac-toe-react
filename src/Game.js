import React, { useState } from 'react';

export function Game() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);

	const loadGame = async () => {
		setLoading(true);
		const response = await fetch(
			'http://localhost:4567/loadgame/XY'
		);
		const json = await response.json();
		setPosts(json);
		setLoading(false);
    console.log(posts)
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1>WP's Tic-Tac-Toe</h1>
			</header>
			 <main className="App-content">
				<section className="App-buttons">
					<button
						data-testid="load-game"
						onClick={loadGame}
						type="button">
						Load Game
					</button>
				</section>
				{loading && <p aria-label="loading">Loading</p>}
				<section data-testid="posts">
					{posts.map((post) => (
						<article key={post.id}>
							<h3>Player One Default Marker: {post.player_one_marker}</h3>
              				<h3>Player Two Default Marker: {post.player_two_marker}</h3>
              				<h3>Board (to be made into a grid): {post.board}</h3>
						</article>
					))}
				</section>         
			</main>
		</div>
	);
};
