import React, { useState } from 'react';

function Game() {
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

				{/* <section data-testid="posts">
					{posts.posts.map((post) => (
						<article key={post.id}>
							<h3>{post.title}</h3>
							<p>{post.body}</p>
						</article>
					))}
				</section>          */}
			</main>
		</div>
	);
}

export { Game };