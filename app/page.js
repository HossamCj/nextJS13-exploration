import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
	return (
		<div className="container">
			<h1 className="text-center">Hello En: Mostafa Yaser</h1>
			<div class="position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-pill">
				<p>
					Welcome to my Next.js 13 app! I've used Next.js's
					advanced routing features to create a smooth user experience.
					Our app structure is streamlined, thanks to the root directory approach.
				</p>
			</div>

			<div class="position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-pill">
				<p>
				But that's not all. We've integrated JSONPlaceholder to display a list of posts. Access them via the 'Posts' link in the navbar. Explore post titles and descriptions, and click any title to view full post details. The post's unique ID is included in the URL for precision.
				</p>
			</div>
			<div class="position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-pill">
				<p>
				In summary, our app highlights Next.js routing efficiency, simple structure, and seamless navigation, all while showcasing posts from JSONPlaceholder.
				</p>
			</div>
			
		</div>
	);
}
