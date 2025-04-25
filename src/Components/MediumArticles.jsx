import { useEffect, useState } from "react";
import axios from "axios";

const MediumArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await axios.get(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@connect2saurav"
        );
        setArticles(res.data.items.slice(0, 3)); // Show latest 3
      } catch (error) {
        console.error("Error fetching Medium articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-purple-700">
        📝 Latest Articles
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => {
          // Check if the thumbnail exists, otherwise use a default image
          const thumbnail =
            article.thumbnail ||
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

          return (
            <a
              key={article.guid}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-purple-300 transition-all duration-300"
            >
              <img
                src={thumbnail}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-purple-800">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                  {article.description.replace(/<[^>]+>/g, "")}
                </p>
                <span className="block text-xs text-gray-400 mt-4">
                  {new Date(article.pubDate).toLocaleDateString()}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default MediumArticles;
