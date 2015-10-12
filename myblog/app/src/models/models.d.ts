declare module models {

	interface IPost {
		author: string;
		content: string;
		createdAt: string;
		objectId: string;
		timePretty: string;
		title: string;
		updatedAt: string;
	}
	
	interface BlogListViewControlContext {
		posts: Array<IPost>
	}

}
