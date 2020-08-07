# ByteSizeArxiv_Web
The website and web-app summarizing ArXiv.org abstracts using machine learning (TF-IDF) to stay current with novel scientific research.

Ran by using make_compressed_abstracts:

	Query category(s) for posts on arxiv.org
	Add abstracts of new posts to running dictionary
	Compute Term Frequency - Inverse Document Frequency (TF-IDF) scores for new words accross dictionary
	Share the sentences with highest cummulative scores, pretty good summaries!
